"use client";

import { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { ChevronDown } from "lucide-react";
import { COURSES } from "@/lib/constants/courses";

interface Group {
  id: string;
  name: string;
  courseSlug: string | null;
}

interface GroupsMultiSelectProps {
  groups: Group[];
  value: string[];
  onChange: (value: string[]) => void;
  disabled?: boolean;
  placeholder?: string;
  "aria-label"?: string;
}

function getGroupLabel(group: Group): string {
  const courseName = group.courseSlug
    ? (COURSES.find((c) => c.slug === group.courseSlug)?.name ??
      group.courseSlug)
    : null;
  return courseName ? `${group.name} (${courseName})` : group.name;
}

function getBadgeVariant(courseSlug: string | null): "default" | "secondary" {
  return courseSlug === "anexo22" ? "default" : "secondary";
}

export function GroupsMultiSelect({
  groups,
  value,
  onChange,
  disabled = false,
  placeholder = "Seleccionar grupos…",
  "aria-label": ariaLabel,
}: GroupsMultiSelectProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  const toggleGroup = (groupId: string) => {
    if (value.includes(groupId)) {
      onChange(value.filter((id) => id !== groupId));
    } else {
      onChange([...value, groupId]);
    }
  };

  const selectedGroups = groups.filter((g) => value.includes(g.id));

  return (
    <Popover open={open} onOpenChange={(o) => !disabled && setOpen(o)}>
      <PopoverTrigger asChild>
        <div
          role="combobox"
          aria-expanded={open}
          aria-label={ariaLabel}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : 0}
          className={`flex flex-nowrap gap-1.5 items-center min-w-0 max-w-full rounded-md p-1.5 transition-colors ${
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:bg-muted/50"
          }`}
        >
          {selectedGroups.length > 0 ? (
            <>
              <span className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                {selectedGroups.map((g) => (
                  <Badge
                    key={g.id}
                    variant={getBadgeVariant(g.courseSlug)}
                    className="text-xs font-normal"
                  >
                    {g.name}
                  </Badge>
                ))}
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
            </>
          ) : (
            <>
              <span className="text-muted-foreground text-sm flex-1">
                {placeholder}
              </span>
              <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
            </>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-0" align="start">
        <div className="max-h-[300px] overflow-y-auto p-2">
          {groups.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">
              No hay grupos. Crea uno en la sección Grupos.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {groups.map((group) => (
                <label
                  key={group.id}
                  className={`flex items-center gap-2 text-sm rounded-md p-2 ${
                    disabled
                      ? "cursor-not-allowed opacity-50"
                      : "cursor-pointer hover:bg-muted/50"
                  }`}
                >
                  <Checkbox
                    checked={value.includes(group.id)}
                    onCheckedChange={() => !disabled && toggleGroup(group.id)}
                    disabled={disabled}
                  />
                  <span>{getGroupLabel(group)}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
