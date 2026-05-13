import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Cloud, Sky, Float } from "@react-three/drei";
import * as THREE from "three";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertTriangle,
  CheckCircle2,
  Anchor,
  Ship as ShipIcon,
  Truck as TruckIcon,
  Plane as PlaneIcon,
  MapPin,
  FileText,
  Scale,
  Calculator,
  Gavel,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useSimulator } from "@/lib/simulator-context";

/* ---------- 3D PIECES ---------- */

function Ocean() {
  const ref = useRef<THREE.Mesh>(null);
  const geo = useMemo(() => new THREE.PlaneGeometry(200, 200, 80, 80), []);
  const basePos = useMemo(() => geo.attributes.position.array.slice(), [geo]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = (basePos as Float32Array)[i * 3];
      const y = (basePos as Float32Array)[i * 3 + 1];
      const z =
        Math.sin(x * 0.25 + t * 1.2) * 0.18 +
        Math.cos(y * 0.3 + t * 0.9) * 0.18 +
        Math.sin((x + y) * 0.15 + t * 0.6) * 0.12;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  });

  return (
    <mesh ref={ref} geometry={geo} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.4, 0]} receiveShadow>
      <meshStandardMaterial
        color="#0b3a6b"
        metalness={0.35}
        roughness={0.45}
        emissive="#0a2a4a"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function Highway() {
  // Scrolling road plane
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    const mat = ref.current.material as THREE.MeshStandardMaterial & { map?: THREE.Texture };
    if (mat.map) mat.map.offset.y -= dt * 0.6;
  });
  const tex = useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 64; c.height = 256;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#2a2a2a"; ctx.fillRect(0, 0, 64, 256);
    ctx.fillStyle = "#f5d142";
    for (let y = 0; y < 256; y += 40) ctx.fillRect(30, y, 4, 22);
    const t = new THREE.CanvasTexture(c);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(1, 6);
    return t;
  }, []);
  return (
    <>
      <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[200, 200]} />
        <meshStandardMaterial color="#6b8e3d" />
      </mesh>
      <mesh ref={ref} position={[0, -0.59, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[6, 60]} />
        <meshStandardMaterial map={tex} />
      </mesh>
    </>
  );
}

function CargoShip({ paused }: { paused: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 1.2) * 0.18;
    group.current.rotation.z = Math.sin(t * 0.9) * 0.04;
    group.current.rotation.x = Math.sin(t * 0.7) * 0.025;
    if (!paused) group.current.position.x = Math.sin(t * 0.15) * 1.2;
  });
  const containers = useMemo(() => {
    const colors = ["#c9a24a", "#1a3d6b", "#d4af5f", "#0f2a4a", "#a8842f", "#2d5485"];
    const arr: { pos: [number, number, number]; color: string }[] = [];
    let idx = 0;
    for (let row = 0; row < 2; row++)
      for (let col = 0; col < 5; col++)
        for (let stack = 0; stack < 2; stack++)
          arr.push({ pos: [-2 + col * 1.05, 0.55 + stack * 0.65, -0.55 + row * 1.1], color: colors[idx++ % colors.length] });
    return arr;
  }, []);
  return (
    <group ref={group}>
      <mesh castShadow><boxGeometry args={[6.5, 0.8, 2.2]} /><meshStandardMaterial color="#8a1a1a" metalness={0.5} roughness={0.4} /></mesh>
      <mesh position={[0, -0.35, 0]}><boxGeometry args={[6.2, 0.25, 1.95]} /><meshStandardMaterial color="#0d0d0d" /></mesh>
      <mesh position={[0, 0.42, 0]}><boxGeometry args={[6.3, 0.05, 2.05]} /><meshStandardMaterial color="#cfcfcf" /></mesh>
      {containers.map((c, i) => (
        <mesh key={i} position={c.pos} castShadow><boxGeometry args={[0.95, 0.6, 1]} /><meshStandardMaterial color={c.color} metalness={0.3} roughness={0.6} /></mesh>
      ))}
      <mesh position={[2.6, 1.1, 0]} castShadow><boxGeometry args={[1.1, 1.4, 1.8]} /><meshStandardMaterial color="#f5f5f0" /></mesh>
      <mesh position={[2.6, 1.95, 0]}><boxGeometry args={[0.7, 0.3, 1.4]} /><meshStandardMaterial color="#1a1a1a" /></mesh>
    </group>
  );
}

function CargoTruck({ paused }: { paused: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.position.y = Math.sin(t * 8) * 0.04 - 0.1;
    if (!paused) group.current.rotation.y = Math.sin(t * 0.4) * 0.05;
  });
  return (
    <group ref={group} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      {/* Trailer */}
      <mesh position={[-1.5, 0.7, 0]} castShadow><boxGeometry args={[3.6, 1.4, 1.6]} /><meshStandardMaterial color="#e8e8e8" /></mesh>
      {/* Cab */}
      <mesh position={[1.4, 0.8, 0]} castShadow><boxGeometry args={[1.4, 1.2, 1.5]} /><meshStandardMaterial color="#1f4e8a" /></mesh>
      <mesh position={[1.7, 1.1, 0]}><boxGeometry args={[0.6, 0.6, 1.35]} /><meshStandardMaterial color="#102a4a" /></mesh>
      {/* Wheels */}
      {[-2.5, -1.5, -0.5, 1.0, 1.7].map((x, i) => (
        <group key={i}>
          <mesh position={[x, 0.05, 0.8]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.3, 0.3, 0.2, 16]} /><meshStandardMaterial color="#111" /></mesh>
          <mesh position={[x, 0.05, -0.8]} rotation={[Math.PI / 2, 0, 0]}><cylinderGeometry args={[0.3, 0.3, 0.2, 16]} /><meshStandardMaterial color="#111" /></mesh>
        </group>
      ))}
    </group>
  );
}

function CargoPlane({ paused }: { paused: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.getElapsedTime();
    group.current.position.y = 1.2 + Math.sin(t * 1.0) * 0.25;
    group.current.rotation.z = Math.sin(t * 0.7) * 0.06;
    if (!paused) group.current.rotation.y = Math.PI / 2 + Math.sin(t * 0.3) * 0.08;
    else group.current.rotation.y = Math.PI / 2;
  });
  return (
    <group ref={group}>
      {/* Fuselage */}
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.55, 0.55, 5.5, 24]} /><meshStandardMaterial color="#f3f3f3" metalness={0.3} roughness={0.4} /></mesh>
      {/* Nose */}
      <mesh position={[2.9, 0, 0]} rotation={[0, 0, -Math.PI / 2]}><coneGeometry args={[0.55, 0.8, 24]} /><meshStandardMaterial color="#f3f3f3" /></mesh>
      {/* Wings */}
      <mesh position={[0, -0.1, 0]} castShadow><boxGeometry args={[1.6, 0.12, 5.5]} /><meshStandardMaterial color="#dcdcdc" /></mesh>
      {/* Tail */}
      <mesh position={[-2.4, 0.6, 0]} castShadow><boxGeometry args={[0.7, 1.0, 0.1]} /><meshStandardMaterial color="#1f4e8a" /></mesh>
      <mesh position={[-2.4, 0.1, 0]}><boxGeometry args={[0.7, 0.1, 1.6]} /><meshStandardMaterial color="#dcdcdc" /></mesh>
      {/* Engines */}
      <mesh position={[0.4, -0.45, 1.6]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.22, 0.22, 0.9, 16]} /><meshStandardMaterial color="#222" /></mesh>
      <mesh position={[0.4, -0.45, -1.6]} rotation={[0, 0, Math.PI / 2]}><cylinderGeometry args={[0.22, 0.22, 0.9, 16]} /><meshStandardMaterial color="#222" /></mesh>
    </group>
  );
}

function FloatingClouds() {
  return (
    <>
      <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.4}>
        <Cloud position={[-12, 7, -8]} speed={0.2} opacity={0.55} />
      </Float>
      <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.3}>
        <Cloud position={[10, 8, -10]} speed={0.2} opacity={0.45} />
      </Float>
      <Float speed={0.4} rotationIntensity={0.1} floatIntensity={0.3}>
        <Cloud position={[2, 9, -14]} speed={0.15} opacity={0.5} />
      </Float>
    </>
  );
}

function Scene({ paused, mode }: { paused: boolean; mode: "Marítimo" | "Terrestre" | "Aéreo" }) {
  return (
    <>
      <Sky sunPosition={[100, 20, 100]} turbidity={6} rayleigh={2} mieCoefficient={0.005} mieDirectionalG={0.8} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[10, 15, 8]} intensity={1.4} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <hemisphereLight args={["#bcd9ff", "#0b3a6b", 0.5]} />
      {mode === "Marítimo" && <Ocean />}
      {mode === "Terrestre" && <Highway />}
      {mode === "Marítimo" && <CargoShip paused={paused} />}
      {mode === "Terrestre" && <CargoTruck paused={paused} />}
      {mode === "Aéreo" && <CargoPlane paused={paused} />}
      <FloatingClouds />
      <fog attach="fog" args={["#bcd9ff", 25, 80]} />
    </>
  );
}

/* ---------- EVENTS PER STAGE PER CASE ---------- */

interface JourneyEvent {
  id: string;
  icon: typeof AlertTriangle;
  title: string;
  scenario: string;
  options: { label: string; correct: boolean; feedback: string }[];
}

type StageMap = Record<string, JourneyEvent>;

// Caso 1: Marítimo ejemplo (China → Manzanillo)
const EVENTS_MARITIMO_EJEMPLO: StageMap = {
  case_file: {
    id: "ev_case", icon: FileText,
    title: "Revisión inicial del expediente",
    scenario: "Antes de zarpar de Shanghai, el agente aduanal revisa los documentos. ¿Qué triada es indispensable que viaje con la mercancía?",
    options: [
      { label: "Solo factura comercial", correct: false, feedback: "Insuficiente: faltan documentos de embarque." },
      { label: "Packing list + factura comercial + Bill of Lading", correct: true, feedback: "Correcto. Estos tres documentos son la base del despacho marítimo." },
      { label: "Únicamente el contrato de compraventa", correct: false, feedback: "El contrato no sustituye documentación de embarque." },
    ],
  },
  analysis: {
    id: "ev_analysis", icon: ShipIcon,
    title: "Tormenta en alta mar — desvío de ruta",
    scenario: "El capitán reporta condiciones adversas y desvía 3 días la ruta. El seguro contratado fue por USD $150 sobre FOB. ¿Esto afecta el valor en aduana?",
    options: [
      { label: "Sí, debo recalcular el seguro proporcional", correct: false, feedback: "El seguro pactado no cambia por desvíos operativos." },
      { label: "No, el seguro pactado se mantiene como incrementable", correct: true, feedback: "Correcto. El monto contratado es el incrementable, sin importar el trayecto." },
      { label: "Debo excluir el seguro del valor en aduana", correct: false, feedback: "El seguro internacional SIEMPRE es incrementable bajo FOB." },
    ],
  },
  decisions: {
    id: "ev_decisions", icon: Scale,
    title: "Decisión de régimen aduanero",
    scenario: "El buque se aproxima a Manzanillo. La mercancía permanecerá indefinidamente en territorio nacional. ¿Qué régimen aplicar?",
    options: [
      { label: "Importación temporal (IMMEX)", correct: false, feedback: "Temporal aplica solo si retornará al extranjero." },
      { label: "Depósito fiscal", correct: false, feedback: "Depósito fiscal es para almacenamiento previo a destino definitivo." },
      { label: "Importación definitiva (clave A1)", correct: true, feedback: "Correcto. Permanencia indefinida = régimen definitivo." },
    ],
  },
  pedimento_capture: {
    id: "ev_pedimento", icon: FileText,
    title: "Captura del pedimento — descripción de mercancía",
    scenario: "Al capturar la descripción, el sistema marca campos obligatorios. ¿Qué información NO puede faltar para la fracción 8471.30.01?",
    options: [
      { label: "Color y peso bruto únicamente", correct: false, feedback: "Faltan especificaciones técnicas." },
      { label: "Características técnicas (pulgadas y uso) + cantidad", correct: true, feedback: "Correcto. Sin esto se invalida la clasificación arancelaria." },
      { label: "Solo el valor unitario", correct: false, feedback: "El valor solo no describe la mercancía." },
    ],
  },
  taxes: {
    id: "ev_taxes", icon: Calculator,
    title: "Verificación del cálculo de contribuciones",
    scenario: "Antes de pagar, ¿sobre qué base se aplica el IVA en una importación definitiva?",
    options: [
      { label: "Sobre el valor factura solamente", correct: false, feedback: "Falta sumar incrementables y contribuciones." },
      { label: "Sobre el valor en aduana + IGI + DTA", correct: true, feedback: "Correcto. Esa es la base gravable del IVA en importación." },
      { label: "Sobre el valor comercial sin DTA", correct: false, feedback: "El DTA forma parte de la base del IVA." },
    ],
  },
  controversy: {
    id: "ev_controversy", icon: Gavel,
    title: "Reconocimiento aduanero — semáforo rojo",
    scenario: "El semáforo marca rojo en Manzanillo. El verificador detecta inconsistencias documentales. ¿Cuál es la primera acción del agente aduanal?",
    options: [
      { label: "Negar la inconsistencia y exigir liberación", correct: false, feedback: "Esto agrava la situación legal." },
      { label: "Solicitar acta circunstanciada y subsanar lo procedente", correct: true, feedback: "Correcto. Es el procedimiento legal correcto." },
      { label: "Pagar la multa antes de cualquier revisión", correct: false, feedback: "Primero se debe documentar la irregularidad." },
    ],
  },
};

// Caso 2: Terrestre — autopartes USA → Nuevo Laredo
const EVENTS_TERRESTRE: StageMap = {
  case_file: {
    id: "ev_case_t", icon: FileText,
    title: "Cruce fronterizo — revisión documental",
    scenario: "El tractocamión se aproxima al puente internacional de Nuevo Laredo. ¿Qué documento ES INDISPENSABLE para acreditar el origen T-MEC y obtener trato preferencial?",
    options: [
      { label: "Carta porte CFDI únicamente", correct: false, feedback: "La carta porte es para transporte, no acredita origen." },
      { label: "Certificación de origen T-MEC firmada por el productor/exportador", correct: true, feedback: "Correcto. Sin esta certificación se paga IGI completo." },
      { label: "Solo la factura comercial", correct: false, feedback: "La factura no sustituye la certificación de origen." },
    ],
  },
  analysis: {
    id: "ev_analysis_t", icon: TruckIcon,
    title: "Demora en el puente — costos adicionales",
    scenario: "El tráfico genera 6 horas de espera. La línea transportista cobra USD $200 extra por estadía. ¿Cómo se trata este monto en el valor en aduana?",
    options: [
      { label: "Es un incrementable obligatorio (flete adicional)", correct: true, feedback: "Correcto. Todo gasto de transporte hasta la aduana es incrementable." },
      { label: "Se ignora porque ocurrió en territorio nacional", correct: false, feedback: "El cargo se generó antes del despacho, sí se incrementa." },
      { label: "Solo aplica si lo cubre el importador", correct: false, feedback: "Independientemente de quién paga, integra el valor en aduana." },
    ],
  },
  decisions: {
    id: "ev_decisions_t", icon: Scale,
    title: "Trato arancelario preferencial",
    scenario: "El productor en EE.UU. emitió certificación T-MEC válida. ¿Qué tasa de IGI aplica a las autopartes 8708.99.99?",
    options: [
      { label: "10% IGI (Tarifa General)", correct: false, feedback: "Esa es la tasa SIN preferencia." },
      { label: "0% IGI con certificación T-MEC", correct: true, feedback: "Correcto. El T-MEC otorga preferencia arancelaria del 0%." },
      { label: "5% promedio de la región", correct: false, feedback: "No existe tasa promedio; se aplica la preferencia o la general." },
    ],
  },
  pedimento_capture: {
    id: "ev_pedimento_t", icon: FileText,
    title: "Captura del identificador de origen",
    scenario: "En el pedimento debes declarar el identificador de trato preferencial. ¿Cuál corresponde a T-MEC?",
    options: [
      { label: "Identificador 'TL' tratado de libre comercio T-MEC", correct: true, feedback: "Correcto. 'TL' con el complemento del país USA acredita el T-MEC." },
      { label: "Identificador 'CR' (certificado de reconocimiento)", correct: false, feedback: "No corresponde a tratados de libre comercio." },
      { label: "No requiere identificador, solo el certificado físico", correct: false, feedback: "El pedimento siempre debe declarar el identificador." },
    ],
  },
  taxes: {
    id: "ev_taxes_t", icon: Calculator,
    title: "Cálculo con preferencia arancelaria",
    scenario: "Con T-MEC el IGI es 0%. ¿Sobre qué base se calcula el IVA?",
    options: [
      { label: "Solo sobre el valor en aduana (porque IGI es 0)", correct: false, feedback: "Aún cuando IGI sea 0, se suma el DTA a la base." },
      { label: "Valor en aduana + IGI (0) + DTA", correct: true, feedback: "Correcto. El DTA siempre integra la base del IVA." },
      { label: "Valor factura sin incrementables", correct: false, feedback: "El IVA se calcula sobre el valor en aduana, no factura." },
    ],
  },
  controversy: {
    id: "ev_controversy_t", icon: Gavel,
    title: "Verificación de origen por la autoridad",
    scenario: "El SAT inicia procedimiento de verificación de origen al exportador. Mientras tanto, ¿qué sucede con la mercancía?",
    options: [
      { label: "Se libera y se mantiene la preferencia hasta resolución", correct: true, feedback: "Correcto. La mercancía se libera; si se invalida el origen, se cobran diferencias." },
      { label: "Se retiene hasta concluir el procedimiento", correct: false, feedback: "No procede retención por verificación de origen." },
      { label: "Se reclasifica automáticamente al 10% IGI", correct: false, feedback: "Sólo si el procedimiento confirma irregularidad." },
    ],
  },
};

// Caso 3: Aéreo — instrumental médico Alemania → AICM
const EVENTS_AEREO: StageMap = {
  case_file: {
    id: "ev_case_a", icon: FileText,
    title: "Recepción del Air Waybill (AWB)",
    scenario: "El embarque sale de Frankfurt. ¿Qué documento sustituye al Bill of Lading en el transporte aéreo?",
    options: [
      { label: "Master Air Waybill (MAWB) / House AWB", correct: true, feedback: "Correcto. El AWB es el documento de transporte aéreo internacional." },
      { label: "Carta porte aérea SAT", correct: false, feedback: "La carta porte CFDI aplica al tramo nacional, no al internacional." },
      { label: "Sea Waybill", correct: false, feedback: "Es para transporte marítimo." },
    ],
  },
  analysis: {
    id: "ev_analysis_a", icon: PlaneIcon,
    title: "Regulación sanitaria — COFEPRIS",
    scenario: "Se trata de instrumental médico esterilizable. Antes del despacho en AICM, ¿qué autorización es indispensable?",
    options: [
      { label: "Permiso sanitario de importación COFEPRIS", correct: true, feedback: "Correcto. Sin este permiso no se libera la mercancía." },
      { label: "Solo NOM de etiquetado", correct: false, feedback: "La NOM es complementaria; el permiso COFEPRIS es obligatorio." },
      { label: "Aviso a SEMARNAT", correct: false, feedback: "SEMARNAT no regula instrumental médico." },
    ],
  },
  decisions: {
    id: "ev_decisions_a", icon: Scale,
    title: "Incoterm CIP — composición del valor",
    scenario: "La operación se pactó CIP AICM (Costo, Seguro y Flete pagados al destino). ¿Cómo afecta a los incrementables?",
    options: [
      { label: "Flete y seguro YA están incluidos en la factura", correct: true, feedback: "Correcto. En CIP no se incrementa flete ni seguro porque ya están en el precio." },
      { label: "Debo sumar flete adicional al valor", correct: false, feedback: "En CIP el vendedor ya pagó el transporte hasta destino." },
      { label: "Sólo se suma el seguro", correct: false, feedback: "CIP incluye costo + seguro + flete." },
    ],
  },
  pedimento_capture: {
    id: "ev_pedimento_a", icon: FileText,
    title: "Permiso COFEPRIS en el pedimento",
    scenario: "Al capturar el pedimento, ¿dónde se declara el permiso sanitario?",
    options: [
      { label: "Identificador 'PS' (permiso sanitario) con número y fecha", correct: true, feedback: "Correcto. El identificador PS valida la regulación no arancelaria." },
      { label: "En el campo de observaciones libre", correct: false, feedback: "Las RNA exigen identificador formal, no observación libre." },
      { label: "No se declara en pedimento, sólo se anexa físico", correct: false, feedback: "Debe declararse el identificador para validar el cumplimiento." },
    ],
  },
  taxes: {
    id: "ev_taxes_a", icon: Calculator,
    title: "DTA en operación aérea",
    scenario: "El IGI del instrumental médico es 5%. ¿Cuál es la tasa del DTA aplicable?",
    options: [
      { label: "8 al millar (0.8%) sobre valor en aduana", correct: true, feedback: "Correcto. La tasa general del DTA es 8 al millar." },
      { label: "16% del valor en aduana", correct: false, feedback: "Esa es la tasa del IVA, no del DTA." },
      { label: "Cuota fija única", correct: false, feedback: "Hay casos con cuota fija, pero la regla general es 8 al millar." },
    ],
  },
  controversy: {
    id: "ev_controversy_a", icon: Gavel,
    title: "Reconocimiento en AICM",
    scenario: "El verificador detecta que el lote físico no coincide con el permiso COFEPRIS declarado. ¿Qué procede?",
    options: [
      { label: "Inicio del PAMA y embargo precautorio de la mercancía", correct: true, feedback: "Correcto. La autoridad debe iniciar el Procedimiento Administrativo en Materia Aduanera." },
      { label: "Pago inmediato de multa y liberación", correct: false, feedback: "No se puede liberar sin subsanar la regulación no arancelaria." },
      { label: "Reexpedición automática al origen", correct: false, feedback: "La reexpedición requiere autorización formal, no es automática." },
    ],
  },
};

// Caso 4: Marítimo textil Vietnam → Veracruz
const EVENTS_MARITIMO_TEXTIL: StageMap = {
  case_file: {
    id: "ev_case_mt", icon: FileText,
    title: "Sector textil — padrón sectorial",
    scenario: "ANMINCADISA importa textiles desde Vietnam. ¿Qué requisito previo debe cumplir como importador?",
    options: [
      { label: "Inscripción en el Padrón de Importadores de Sectores Específicos (textil)", correct: true, feedback: "Correcto. El sector textil exige padrón sectorial vigente." },
      { label: "Solo padrón de importadores general", correct: false, feedback: "El sector textil requiere ADEMÁS el sectorial." },
      { label: "Ningún padrón, sólo RFC activo", correct: false, feedback: "Sin padrón no puede operar la importación." },
    ],
  },
  analysis: {
    id: "ev_analysis_mt", icon: ShipIcon,
    title: "Precios estimados — riesgo de subvaluación",
    scenario: "El SAT publicó precios estimados para la fracción textil. La factura del proveedor está 30% por debajo. ¿Qué riesgo enfrenta el importador?",
    options: [
      { label: "Embargo precautorio y obligación de garantizar diferencias", correct: true, feedback: "Correcto. La subvaluación obliga a constituir garantía o se embarga." },
      { label: "Sólo una observación sin consecuencias", correct: false, feedback: "Subvaluación es causal de embargo precautorio." },
      { label: "Reclasificación automática a otra fracción", correct: false, feedback: "No procede reclasificación por precio, sino garantía o embargo." },
    ],
  },
  decisions: {
    id: "ev_decisions_mt", icon: Scale,
    title: "Cuota compensatoria sectorial",
    scenario: "Vietnam no tiene tratado con México y la fracción textil 6109.10.01 paga IGI del 25%. ¿Aplica además alguna cuota compensatoria?",
    options: [
      { label: "Verificar resoluciones antidumping vigentes para origen Vietnam", correct: true, feedback: "Correcto. El sector textil tiene varias cuotas antidumping según fracción y origen." },
      { label: "Nunca aplican cuotas a textiles", correct: false, feedback: "Sí existen cuotas antidumping en textiles." },
      { label: "Aplica automáticamente 200%", correct: false, feedback: "No es automático; depende de cada resolución específica." },
    ],
  },
  pedimento_capture: {
    id: "ev_pedimento_mt", icon: FileText,
    title: "Declaración de marca y modelo",
    scenario: "En textiles, ¿qué dato adicional exige el pedimento para validar la descripción?",
    options: [
      { label: "Marca, modelo, composición de fibras y país de origen", correct: true, feedback: "Correcto. Sin estos datos se invalida la descripción comercial." },
      { label: "Solo el peso neto en kilogramos", correct: false, feedback: "Es necesario pero insuficiente." },
      { label: "Solo el valor unitario en USD", correct: false, feedback: "Falta la descripción comercial completa." },
    ],
  },
  taxes: {
    id: "ev_taxes_mt", icon: Calculator,
    title: "IGI sectorial elevado",
    scenario: "El IGI textil es 25%. Con valor en aduana de USD $50,000, ¿cuál es el IGI aproximado en USD?",
    options: [
      { label: "USD $12,500 (50,000 × 25%)", correct: true, feedback: "Correcto. IGI = Valor en aduana × tasa." },
      { label: "USD $8,000 (50,000 × 16%)", correct: false, feedback: "Esa es la tasa del IVA, no del IGI." },
      { label: "USD $400 (50,000 × 0.8%)", correct: false, feedback: "Esa es la tasa del DTA." },
    ],
  },
  controversy: {
    id: "ev_controversy_mt", icon: Gavel,
    title: "Embargo precautorio por subvaluación",
    scenario: "La aduana de Veracruz embarga la mercancía por subvaluación. ¿Cómo puede el importador recuperarla durante el PAMA?",
    options: [
      { label: "Garantizar el interés fiscal con fianza o depósito", correct: true, feedback: "Correcto. La garantía permite recuperar la mercancía mientras se resuelve." },
      { label: "Esperar la resolución sin actuar", correct: false, feedback: "La inacción puede derivar en remate de la mercancía." },
      { label: "Pagar sólo el IVA pendiente", correct: false, feedback: "Debe garantizarse la totalidad del crédito fiscal." },
    ],
  },
};

const EVENTS_BY_CASE: Record<string, StageMap> = {
  maritimo_ejemplo: EVENTS_MARITIMO_EJEMPLO,
  terrestre_autopartes: EVENTS_TERRESTRE,
  aereo_medico: EVENTS_AEREO,
  maritimo_textil: EVENTS_MARITIMO_TEXTIL,
};

/* ---------- MAIN COMPONENT ---------- */

interface Props {
  variant?: "full" | "compact";
}

export default function MaritimeJourney({ variant = "compact" }: Props) {
  const { currentScreen, caseData, caseKey } = useSimulator();
  const stageMap = EVENTS_BY_CASE[caseKey] ?? EVENTS_MARITIMO_EJEMPLO;
  const event = stageMap[currentScreen];

  const [progress, setProgress] = useState(0);
  const [resolved, setResolved] = useState<Set<string>>(new Set());
  const [activeEvent, setActiveEvent] = useState<JourneyEvent | null>(null);
  const [feedback, setFeedback] = useState<{ correct: boolean; text: string } | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  // Reset journey state when case changes
  useEffect(() => {
    setResolved(new Set());
    setActiveEvent(null);
    setFeedback(null);
    setWarning(null);
    setProgress(0);
  }, [caseKey]);

  useEffect(() => {
    if (!event) return;
    if (resolved.has(event.id)) return;
    const t = setTimeout(() => {
      setActiveEvent(event);
      setFeedback(null);
      setWarning(null);
    }, 600);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScreen, caseKey]);

  useEffect(() => {
    if (activeEvent) return;
    const interval = setInterval(() => setProgress((p) => Math.min(100, p + 0.2)), 100);
    return () => clearInterval(interval);
  }, [activeEvent]);

  useEffect(() => {
    if (!event) return;
    if (!resolved.has(event.id) && !activeEvent) {
      setWarning("Tienes un evento en ruta sin responder. Atiéndelo para continuar tu trayecto.");
    } else {
      setWarning(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScreen, resolved, activeEvent]);

  const handleChoice = (opt: JourneyEvent["options"][0]) => {
    setFeedback({ correct: opt.correct, text: opt.feedback });
    if (opt.correct && activeEvent) {
      setTimeout(() => {
        setResolved((r) => new Set(r).add(activeEvent.id));
        setActiveEvent(null);
        setFeedback(null);
        setWarning(null);
      }, 1600);
    }
  };

  const reopenEvent = () => {
    if (event && !resolved.has(event.id)) {
      setActiveEvent(event);
      setFeedback(null);
    }
  };

  const totalEvents = Object.keys(stageMap).length;
  const canvasHeight = variant === "full" ? 340 : 200;
  const ModeIcon = caseData.mode === "Terrestre" ? TruckIcon : caseData.mode === "Aéreo" ? PlaneIcon : ShipIcon;
  const OriginIcon = caseData.mode === "Aéreo" ? PlaneIcon : caseData.mode === "Terrestre" ? TruckIcon : Anchor;

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-md">
      <div className="flex items-center justify-between border-b bg-gradient-to-r from-primary to-[hsl(212_85%_18%)] px-4 py-2.5 text-primary-foreground">
        <div className="flex items-center gap-2">
          <ModeIcon className="h-4 w-4 text-accent" />
          <span className="text-xs font-semibold sm:text-sm">
            Operación en tiempo real · {caseData.mode} · {caseData.route.from} → {caseData.route.to}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="hidden text-primary-foreground/70 sm:inline">
            Eventos: {resolved.size}/{totalEvents}
          </span>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setCollapsed((c) => !c)}
            className="h-7 px-2 text-xs text-primary-foreground hover:bg-primary-foreground/10"
            aria-label={collapsed ? "Expandir" : "Colapsar"}
          >
            {collapsed ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronUp className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>

      {warning && !collapsed && (
        <Alert className="rounded-none border-x-0 border-t-0 border-warning/40 bg-warning/10">
          <AlertTriangle className="h-4 w-4 text-warning" />
          <AlertTitle className="text-xs font-semibold text-warning-foreground">Precaución</AlertTitle>
          <AlertDescription className="flex items-center justify-between gap-3 text-xs">
            <span>{warning}</span>
            <Button size="sm" variant="outline" onClick={reopenEvent} className="h-7 text-xs">
              Atender ahora
            </Button>
          </AlertDescription>
        </Alert>
      )}

      {!collapsed && (
        <div
          className="relative w-full bg-gradient-to-b from-[#bcd9ff] to-[#5a8fc4]"
          style={{ height: canvasHeight }}
        >
          <Canvas shadows camera={{ position: [0, 4, 11], fov: 45 }} dpr={[1, 1.5]}>
            <Suspense fallback={null}>
              <Scene paused={!!activeEvent} mode={caseData.mode} />
            </Suspense>
          </Canvas>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <div className="flex items-center justify-between text-[10px] font-medium text-white">
              <span className="flex items-center gap-1">
                <OriginIcon className="h-3 w-3" /> {caseData.route.from}
              </span>
              <span>{Math.round(progress)}% del trayecto</span>
              <span className="flex items-center gap-1">
                {caseData.route.to} <MapPin className="h-3 w-3" />
              </span>
            </div>
            <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-accent transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {activeEvent && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm animate-fade-in">
              <div className="w-full max-w-md rounded-xl border border-accent/30 bg-card p-5 shadow-2xl">
                <div className="mb-3 flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15">
                    <activeEvent.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-accent">
                      Evento en ruta
                    </p>
                    <h4 className="text-sm font-bold text-primary">{activeEvent.title}</h4>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {activeEvent.scenario}
                </p>
                <div className="space-y-2">
                  {activeEvent.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleChoice(opt)}
                      disabled={feedback?.correct}
                      className={cn(
                        "w-full rounded-lg border px-3 py-2 text-left text-sm transition-all",
                        "hover:border-accent hover:bg-accent/5",
                        feedback && opt.correct && "border-green-500 bg-green-500/10",
                        feedback && !opt.correct && feedback.text === opt.feedback && "border-destructive bg-destructive/10"
                      )}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {feedback && (
                  <div
                    className={cn(
                      "mt-3 rounded-lg border-l-4 p-3 text-xs",
                      feedback.correct
                        ? "border-green-500 bg-green-500/10 text-green-900 dark:text-green-200"
                        : "border-destructive bg-destructive/10 text-destructive"
                    )}
                  >
                    {feedback.correct ? "✓ " : "✗ "}
                    {feedback.text}
                  </div>
                )}
              </div>
            </div>
          )}

          {event && resolved.has(event.id) && !activeEvent && (
            <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-green-500/90 px-2.5 py-1 text-[10px] font-semibold text-white shadow">
              <CheckCircle2 className="h-3 w-3" /> Evento resuelto
            </div>
          )}
        </div>
      )}
    </div>
  );
}
