import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { ScreenId, SCREEN_IDS, SCORE_BANDS, type FormField, type QuizQuestion } from "./simulator-data";
import { CASES, getCaseByKey, totalPointsOf, type CaseBundle } from "./cases";

interface SimState {
  studentName: string;
  group: string;
  currentScreen: ScreenId;
  started: boolean;
  finished: boolean;
  answers: Record<string, string>;
  score: number;
  maxScore: number;
  validationMessages: { message: string; severity: string }[];
  scoreBandLabel: string;
  caseKey: string;
  caseData: CaseBundle;
  availableCases: CaseBundle[];
}

interface SimActions {
  setStudentInfo: (name: string, group: string) => void;
  setCaseKey: (key: string) => void;
  startExam: () => void;
  goNext: () => void;
  goBack: () => void;
  goToScreen: (id: ScreenId) => void;
  resumeScreen: ScreenId | null;
  resumeToLast: () => void;
  setAnswer: (id: string, value: string) => void;
  submitExam: () => void;
  resetSimulator: () => void;
  changeCase: (key: string) => void;
  isFieldCorrect: (id: string) => boolean | null;
  isAnswerCorrect: (id: string) => boolean | null;
}

const SimContext = createContext<(SimState & SimActions) | null>(null);

export function useSimulator() {
  const ctx = useContext(SimContext);
  if (!ctx) throw new Error("useSimulator must be inside SimulatorProvider");
  return ctx;
}

function checkField(f: FormField, val: string): boolean {
  if (!val) return false;
  if (f.type === "number") {
    const num = parseFloat(val);
    const exp = typeof f.expected === "number" ? f.expected : parseFloat(f.expected as string);
    const tol = f.tolerance ?? 0;
    return !isNaN(num) && Math.abs(num - exp) <= exp * tol + 1;
  }
  if (f.expectedContains) return val.toLowerCase().includes(String(f.expectedContains).toLowerCase());
  return val.trim().toLowerCase() === String(f.expected).toLowerCase();
}

function gradeQuiz(questions: QuizQuestion[], answers: Record<string, string>) {
  let pts = 0;
  for (const q of questions) if (answers[q.id] === q.correctAnswer) pts += q.points;
  return pts;
}

function gradeFields(fields: FormField[], answers: Record<string, string>) {
  let pts = 0;
  for (const f of fields) if (checkField(f, answers[f.id] ?? "")) pts += f.points;
  return pts;
}

function runValidation(rules: CaseBundle["validationRules"], answers: Record<string, string>) {
  const msgs: { message: string; severity: string }[] = [];
  for (const rule of rules) {
    const val = answers[rule.ifField] ?? "";
    if (rule.notEquals && val.trim().toLowerCase() !== rule.notEquals.toLowerCase()) {
      msgs.push({ message: rule.message, severity: rule.severity });
    }
    if (rule.notInToleranceOf !== undefined) {
      const num = parseFloat(val);
      if (isNaN(num) || Math.abs(num - rule.notInToleranceOf) > rule.notInToleranceOf * 0.005 + 1) {
        msgs.push({ message: rule.message, severity: rule.severity });
      }
    }
  }
  return msgs;
}

export function SimulatorProvider({ children }: { children: React.ReactNode }) {
  const [studentName, setStudentName] = useState("");
  const [group, setGroup] = useState("");
  const [caseKey, setCaseKeyState] = useState<string>(CASES[0].key);
  const [screenIdx, setScreenIdx] = useState(0);
  const [lastNonCaseIdx, setLastNonCaseIdx] = useState<number | null>(null);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [validationMessages, setValidationMessages] = useState<{ message: string; severity: string }[]>([]);
  const [scoreBandLabel, setScoreBandLabel] = useState("");

  const caseData = useMemo(() => getCaseByKey(caseKey), [caseKey]);
  const maxScore = useMemo(() => totalPointsOf(caseData), [caseData]);

  const setStudentInfo = useCallback((name: string, g: string) => {
    setStudentName(name);
    setGroup(g);
  }, []);

  const setCaseKey = useCallback((key: string) => setCaseKeyState(key), []);

  const startExam = useCallback(() => {
    setStarted(true);
    setFinished(false);
    setScreenIdx(1);
  }, []);

  const goNext = useCallback(() => {
    setScreenIdx((i) => Math.min(i + 1, SCREEN_IDS.length - 1));
  }, []);

  const goBack = useCallback(() => {
    setScreenIdx((i) => Math.max(i - 1, 1));
  }, []);

  const goToScreen = useCallback((id: ScreenId) => {
    const idx = SCREEN_IDS.indexOf(id);
    if (idx < 0) return;
    setScreenIdx((prev) => {
      if (id === "case_file" && SCREEN_IDS[prev] !== "case_file" && prev > 1) {
        setLastNonCaseIdx(prev);
      }
      return idx;
    });
  }, []);

  const resumeToLast = useCallback(() => {
    if (lastNonCaseIdx !== null) {
      setScreenIdx(lastNonCaseIdx);
      setLastNonCaseIdx(null);
    }
  }, [lastNonCaseIdx]);

  const setAnswer = useCallback((id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }, []);

  const submitExam = useCallback(() => {
    setAnswers((current) => {
      const pts =
        gradeQuiz(caseData.analysisQuestions, current) +
        gradeQuiz(caseData.decisionQuestions, current) +
        gradeQuiz(caseData.controversyQuestions, current) +
        gradeFields(caseData.pedimentoFields, current) +
        gradeFields(caseData.taxFields, current);
      const total = totalPointsOf(caseData);
      const pct = Math.round((pts / total) * 100);
      setScore(pct);
      const band = SCORE_BANDS.find((b) => pct >= b.min && pct <= b.max);
      setScoreBandLabel(band?.label ?? "");
      setValidationMessages(runValidation(caseData.validationRules, current));
      setFinished(true);
      setScreenIdx(SCREEN_IDS.indexOf("validation"));
      return current;
    });
  }, [caseData]);

  const resetSimulator = useCallback(() => {
    setAnswers({});
    setScore(0);
    setValidationMessages([]);
    setScoreBandLabel("");
    setFinished(false);
    setScreenIdx(1);
  }, []);

  const changeCase = useCallback((key: string) => {
    setCaseKeyState(key);
    setAnswers({});
    setScore(0);
    setValidationMessages([]);
    setScoreBandLabel("");
    setFinished(false);
    setScreenIdx(1);
    setLastNonCaseIdx(null);
  }, []);

  const isAnswerCorrect = useCallback(
    (id: string): boolean | null => {
      const val = answers[id];
      if (!val) return null;
      const all = [
        ...caseData.analysisQuestions,
        ...caseData.decisionQuestions,
        ...caseData.controversyQuestions,
      ];
      const q = all.find((x) => x.id === id);
      if (!q) return null;
      return val === q.correctAnswer;
    },
    [answers, caseData]
  );

  const isFieldCorrect = useCallback(
    (id: string): boolean | null => {
      const val = answers[id];
      if (!val) return null;
      const all = [...caseData.pedimentoFields, ...caseData.taxFields];
      const f = all.find((x) => x.id === id);
      if (!f) return null;
      return checkField(f, val);
    },
    [answers, caseData]
  );

  const currentScreen = SCREEN_IDS[screenIdx];

  return (
    <SimContext.Provider
      value={{
        studentName,
        group,
        currentScreen,
        started,
        finished,
        answers,
        score,
        maxScore,
        validationMessages,
        scoreBandLabel,
        caseKey,
        caseData,
        availableCases: CASES,
        setStudentInfo,
        setCaseKey,
        startExam,
        goNext,
        goBack,
        goToScreen,
        resumeScreen: lastNonCaseIdx !== null ? SCREEN_IDS[lastNonCaseIdx] : null,
        resumeToLast,
        setAnswer,
        submitExam,
        resetSimulator,
        changeCase,
        isFieldCorrect,
        isAnswerCorrect,
      }}
    >
      {children}
    </SimContext.Provider>
  );
}
