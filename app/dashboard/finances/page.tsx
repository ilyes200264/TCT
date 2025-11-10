import { FileDown, PiggyBank, Receipt, Wallet, Sparkles } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { LineChart } from "@/components/LineChart";
import { DataTable, type Column } from "@/components/DataTable";
import { Badge } from "@/components/ui/badge";
import {
  demoRevenueByMonth,
  demoAdminSummary,
  demoVehicleHoldings,
  demoVehicleSalesLedger,
  demoTransactions,
} from "@/lib/demo-data";

type Transaction = (typeof demoTransactions)[number];

const columns: Column<Transaction>[] = [
  {
    header: "Date",
    cell: (row) =>
      new Date(row.createdAt).toLocaleDateString("fr-FR", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
  },
  {
    header: "Opérateur",
    accessor: "operatorName",
  },
  {
    header: "Description",
    accessor: "description",
  },
  {
    header: "Type",
    cell: (row) => (
      <Badge
        variant={
          row.type === "credit" || row.type === "commission"
            ? "success"
            : row.type === "tax"
              ? "warning"
              : row.type === "debit"
                ? "danger"
                : "secondary"
        }
      >
        {row.type === "credit"
          ? "Crédit"
          : row.type === "debit"
            ? "Débit"
            : row.type === "commission"
              ? "Commission"
              : "Taxe"}
      </Badge>
    ),
  },
  {
    header: "Montant",
    cell: (row) =>
      new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "USD",
      }).format(row.amount),
    className: "text-right",
  },
];

export default function FinancesPage() {
  const transactions = demoTransactions;
  const networkBalance = demoAdminSummary.networkBalance;
  const totalSales = demoVehicleSalesLedger.reduce(
    (sum, sale) => sum + sale.salePrice,
    0,
  );
  const totalInvestments = demoVehicleHoldings.reduce(
    (sum, vehicle) => sum + vehicle.purchasePrice,
    0,
  );
  const taxTotal = transactions
    .filter((transaction) => transaction.type === "tax")
    .reduce((sum, transaction) => sum + Math.abs(transaction.amount), 0);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <FinanceTile
          title="Solde réseau"
          amount={networkBalance}
          icon={Wallet}
          footer="Aligné sur l'encours opérateurs du tableau de bord"
        />
        <FinanceTile
          title="Revenus cumulés"
          amount={totalSales}
          icon={PiggyBank}
          footer="Ventes véhicules finalisées ce mois"
        />
        <FinanceTile
          title="Décaissements"
          amount={totalInvestments}
          icon={Receipt}
          footer="Investissements sur la flotte détenue"
        />
        <FinanceTile
          title="Taxes retenues"
          amount={taxTotal}
          icon={Sparkles}
          footer="Déclarations en attente de validation"
        />
      </div>

      <Tabs defaultValue="income" className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">Pilotage financier</h2>
            <p className="text-sm text-muted-foreground">
              Suivez les encaissements, les commissions versées et les impacts fiscaux par opérateur.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-brand/40 text-brand-light">
              Export CSV
            </Button>
            <Button variant="ghost" className="gap-2 text-muted-foreground">
              <FileDown className="h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>
        <TabsList>
          <TabsTrigger value="balance">Encours</TabsTrigger>
          <TabsTrigger value="income">Revenus</TabsTrigger>
          <TabsTrigger value="taxes">Taxes</TabsTrigger>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="balance">
          <LineChart
            title="Évolution des encours (mensuel)"
            data={demoRevenueByMonth}
            xKey="month"
            yKey="revenue"
            yLabel="USD"
          />
        </TabsContent>
        <TabsContent value="income">
          <LineChart
            title="Revenus mensuels"
            data={demoRevenueByMonth}
            xKey="month"
            yKey="revenue"
            yLabel="USD"
          />
        </TabsContent>
        <TabsContent value="taxes">
          <div className="rounded-lg border border-border/60 bg-[#101b31]/50 p-6 text-sm text-muted-foreground">
            Centralisez ici les rapports fiscaux régionaux, les retenues opérateurs et les validations comptables.
          </div>
        </TabsContent>
        <TabsContent value="transactions">
          <DataTable columns={columns} data={transactions} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface FinanceTileProps {
  title: string;
  amount: number;
  icon: React.ComponentType<{ className?: string }>;
  footer: string;
}

function FinanceTile({ title, amount, icon: Icon, footer }: FinanceTileProps) {
  return (
    <div className="rounded-lg border border-border/60 bg-[#101b31]/60 p-5 shadow-card">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{title}</p>
        <span className="rounded-lg bg-brand/20 p-2 text-brand-light">
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-3 text-2xl font-semibold text-white">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount)}
      </p>
      <p className="mt-2 text-xs text-muted-foreground">{footer}</p>
    </div>
  );
}

