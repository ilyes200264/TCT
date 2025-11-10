import { Skeleton } from "@/components/ui/skeleton";

export default function DocumentsLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-16 rounded-lg border border-border/40" />
      <Skeleton className="h-64 rounded-lg border border-border/40" />
    </div>
  );
}

