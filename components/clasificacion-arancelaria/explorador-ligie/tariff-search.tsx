"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface TariffSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function TariffSearch({ value, onChange }: TariffSearchProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Buscar por código arancelario, descripción..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 sm:pl-12 h-12 sm:h-14 text-sm sm:text-base border-border bg-card shadow-sm transition-all duration-300 hover:border-primary/50 focus-visible:border-primary focus-visible:shadow-md"
      />
    </div>
  );
}
