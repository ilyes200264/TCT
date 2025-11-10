import { Skeleton } from "@/components/ui/skeleton";

export default function FinancesLoading() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className="h-32 rounded-lg border border-border/40" />
        ))}
      </div>
      <Skeleton className="h-[320px] rounded-lg border border-border/40" />
      <Skeleton className="h-64 rounded-lg border border-border/40" />
    </div>
  );
}

