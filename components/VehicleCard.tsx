import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface VehicleCardProps {
  brand: string;
  model: string;
  price: number;
  operator: string;
  status: string;
  imageUrl?: string | null;
}

export function VehicleCard({
  brand,
  model,
  price,
  operator,
  status,
  imageUrl,
}: VehicleCardProps) {
  const statusVariant =
    status === "Available"
      ? "success"
      : status === "Maintenance"
        ? "warning"
        : "secondary";
  const statusLabel =
    status === "Available"
      ? "Disponible"
      : status === "Maintenance"
        ? "Maintenance"
        : "Réservé";

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-gradient-to-br from-[#13203a] to-[#0a1222]">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-3">
        <div>
          <CardTitle className="text-lg text-white">
            {brand} {model}
          </CardTitle>
          <p className="text-xs text-muted-foreground">Opérateur · {operator}</p>
        </div>
        <Badge variant={statusVariant}>
          {statusLabel}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-border/40 bg-border/20">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${brand} ${model}`}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              Vehicle preview
            </div>
          )}
        </div>
        <p className="text-sm">
          <span className="text-muted-foreground">Wholesale price:</span>{" "}
          <span className="text-lg font-semibold text-white">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </span>
        </p>
      </CardContent>
      <CardFooter className={cn("mt-auto flex items-center justify-between gap-3")}>
        <Button size="sm" className="w-full">
          Créer une opportunité
        </Button>
        <Button size="sm" variant="outline" className="w-full border-brand/40 text-brand-light">
          Ouvrir la fiche
        </Button>
      </CardFooter>
    </Card>
  );
}

