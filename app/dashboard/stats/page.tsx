import { ArrowUpRight, Car, PieChart, Users } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { StatCard } from "@/components/StatCard";
import { LineChart } from "@/components/LineChart";
import {
  demoOperators,
  demoRevenueByMonth,
  demoTransactions,
  demoVehicles,
  demoTopModels,
} from "@/lib/demo-data";

export default function StatsPage() {
  const totalRevenue = demoTransactions
    .filter((transaction) => transaction.type === "credit" || transaction.type === "commission")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const commissionShare = demoTransactions
    .filter((transaction) => transaction.type === "commission")
    .reduce((sum, transaction) => sum + transaction.amount, 0);

  const activeVehicles = demoVehicles.length;
  const utilizationRate = Math.min(
    100,
    Math.round(
      (demoVehicles.filter((vehicle) => vehicle.status !== "Maintenance").length / activeVehicles) *
        100,
    ),
  );

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Revenus réseau"
          value={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalRevenue)}
          description="Chiffre d’affaires consolidé"
          icon={ArrowUpRight}
          trend={{ value: "+12,4% vs N-1", isPositive: true }}
        />
        <StatCard
          title="Flotte totale"
          value={activeVehicles.toString()}
          description="Véhicules suivis au catalogue"
          icon={Car}
          trend={{ value: "+4 ce mois", isPositive: true }}
        />
        <StatCard
          title="Opérateurs actifs"
          value={demoOperators.length.toString()}
          description="Réseaux sous licence"
          icon={Users}
          trend={{ value: "+1 nouveau", isPositive: true }}
        />
        <StatCard
          title="Taux d’utilisation"
          value={`${utilizationRate}%`}
          description="Véhicules engagés cette semaine"
          icon={PieChart}
          trend={{ value: "+6 pts", isPositive: true }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <LineChart
          title="Revenus mensuels"
          data={demoRevenueByMonth}
          xKey="month"
          yKey="revenue"
          yLabel="USD"
        />
        <div className="rounded-lg border border-border/60 bg-[#101b31]/60 p-6">
          <h3 className="text-lg font-semibold text-white">Modèles les plus performants</h3>
          <p className="text-sm text-muted-foreground">
            Volume de mise en circulation par modèle sur l’ensemble du réseau.
          </p>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={demoTopModels}
                margin={{ top: 10, right: 20, bottom: 0, left: -10 }}
              >
                <CartesianGrid stroke="rgba(148, 163, 184, 0.12)" strokeDasharray="4 8" />
                <XAxis
                  dataKey="model"
                  stroke="rgba(148, 163, 184, 0.45)"
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="rgba(148, 163, 184, 0.45)"
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  cursor={{ fill: "rgba(96,165,250,0.1)" }}
                  contentStyle={{
                    background: "#0f172a",
                    borderRadius: "12px",
                    border: "1px solid rgba(96,165,250,0.2)",
                    color: "#f8fafc",
                  }}
                />
                <Bar dataKey="units" fill="#60a5fa" radius={[8, 8, 0, 0]} />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Les commissions représentent{" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(commissionShare)}{" "}
            du chiffre d’affaires total.
          </p>
        </div>
      </div>
    </div>
  );
}

