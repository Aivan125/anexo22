import { FileText } from "lucide-react";
import { ClassificationDetail } from "@/components/clasificacion-arancelaria/explorador-ligie/classification-detail";
import type { Classification } from "@/types/clasificacion-arancelaria";

interface SearchResult {
  type: "classification";
  data: Classification;
  context: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

export function SearchResults({ results, query }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No se encontraron resultados para &quot;{query}&quot;
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
        <FileText className="h-4 w-4" />
        <span>{results.length} resultados encontrados</span>
      </div>
      {results.map((result, index) => (
        <div key={index} className="space-y-2">
          <p className="text-xs text-muted-foreground">{result.context}</p>
          <ClassificationDetail classification={result.data} />
        </div>
      ))}
    </div>
  );
}
