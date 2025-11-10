import { Skeleton } from "@/components/ui/skeleton";

export default function SettingsLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-16 rounded-lg border border-border/40" />
      <div className="grid gap-6 lg:grid-cols-2">
        <Skeleton className="h-[360px] rounded-lg border border-border/40" />
        <Skeleton className="h-[240px] rounded-lg border border-border/40" />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <Skeleton className="h-[220px] rounded-lg border border-border/40" />
        <Skeleton className="h-[220px] rounded-lg border border-border/40" />
      </div>
    </div>
  );
}

