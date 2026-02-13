import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-6 sm:py-8 max-w-5xl">
        <div className="space-y-4">
          <Skeleton className="h-10 w-32" />
          <div className="grid gap-4 md:grid-cols-1">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader className="p-4 sm:p-6">
                  <Skeleton className="h-6 w-48 mb-2" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4 mt-2" />
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <Skeleton className="h-6 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
