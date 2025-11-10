import { Skeleton } from "@/components/ui/skeleton";

export default function SubscriptionLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-72 rounded-lg border border-border/40" />
      <Skeleton className="h-48 rounded-lg border border-border/40" />
    </div>
  );
}

