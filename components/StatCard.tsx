import { type LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
  className?: string;
}

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden bg-gradient-to-br from-[#172644] to-[#0b1324]", className)}>
      <CardHeader className="flex flex-row items-center justify-between border-b border-border/50 pb-4">
        <div>
          <CardTitle className="text-sm font-medium text-muted-foreground/80">
            {title}
          </CardTitle>
          <CardDescription className="text-3xl font-semibold text-white">
            {value}
          </CardDescription>
        </div>
        <span className="rounded-xl bg-brand/20 p-3 text-brand-light">
          <Icon className="h-5 w-5" />
        </span>
      </CardHeader>
      <CardContent className="flex items-center justify-between pt-4 text-sm">
        <p className="text-muted-foreground">{description}</p>
        {trend ? (
          <span
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold",
              trend.isPositive
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-red-500/20 text-red-200",
            )}
          >
            {trend.isPositive ? "▲" : "▼"} {trend.value}
          </span>
        ) : null}
      </CardContent>
    </Card>
  );
}

