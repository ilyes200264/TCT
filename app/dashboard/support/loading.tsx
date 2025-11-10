import { Skeleton } from "@/components/ui/skeleton";

export default function SupportLoading() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <Skeleton className="h-[420px] rounded-lg border border-border/40" />
      <div className="space-y-6">
        <Skeleton className="h-[320px] rounded-lg border border-border/40" />
        <Skeleton className="h-[180px] rounded-lg border border-border/40" />
      </div>
    </div>
  );
}

