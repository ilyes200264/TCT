import { FileDown, RefreshCcw } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { demoOperators } from "@/lib/demo-data";

export default function SubscriptionPage() {
  const renewals = [...demoOperators]
    .sort(
      (a, b) =>
        new Date(a.renewalDate).getTime() - new Date(b.renewalDate).getTime(),
    )
    .slice(0, 6);

  const atRisk = demoOperators.filter(
    (operator) => operator.status !== "Active",
  ).length;

  const averageBalance =
    demoOperators.reduce((sum, operator) => sum + operator.balance, 0) /
    demoOperators.length;

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <Card className="bg-[#101b31]/60">
        <CardHeader>
          <CardTitle className="text-white">Suivi licences opérateurs</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-6 md:grid-cols-2">
          <InfoItem
            label="Opérateurs actifs"
            value={`${demoOperators.length} réseaux`}
          />
          <InfoItem
            label="Renouvellements à 60 jours"
            value={`${renewals.length} dossiers prioritaires`}
          />
          <InfoItem
            label="Statut réseau"
            value={
              atRisk > 0 ? `${atRisk} opérateurs à risque` : "Tout est conforme"
            }
            badge={atRisk === 0}
          />
          <InfoItem
            label="Solde moyen opérateur"
            value={new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
            }).format(averageBalance)}
          />
          <div className="md:col-span-2">
            <p className="text-sm text-muted-foreground">
              Surveillez les échéances contractuelles, priorisez les renouvellements
              et déclenchez les actions commerciales nécessaires pour maintenir un
              accès continu aux services.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="outline" className="gap-2 border-brand/40 text-brand-light">
            <RefreshCcw className="h-4 w-4" />
            Planifier les renouvellements
          </Button>
          <Button variant="ghost" className="gap-2 text-muted-foreground">
            <FileDown className="h-4 w-4" />
            Exporter la liste
          </Button>
        </CardFooter>
      </Card>

      <Card className="bg-[#101b31]/50">
        <CardHeader>
          <CardTitle className="text-white">Renouvellements imminents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renewals.map((operator) => (
            <div
              key={operator.id}
              className="flex flex-col gap-2 rounded-lg border border-border/40 bg-border/10 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold text-white">{operator.name}</p>
                <p className="text-xs text-muted-foreground">
                  {operator.licenseType} · {operator.location}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={operator.status === "Active" ? "success" : "warning"}>
                  {operator.status === "Active" ? "Actif" : "À risque"}
                </Badge>
                <p className="text-sm font-medium text-white">
                  {new Date(operator.renewalDate).toLocaleDateString("fr-FR")}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function InfoItem({
  label,
  value,
  badge,
}: {
  label: string;
  value: string;
  badge?: boolean;
}) {
  return (
    <div className="space-y-1.5 rounded-lg border border-border/50 bg-border/20 p-4">
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      {badge ? (
        <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-200">
          {value}
        </span>
      ) : (
        <p className="text-base font-medium text-white">{value}</p>
      )}
    </div>
  );
}

