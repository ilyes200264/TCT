import { Wallet, Car, BadgeCheck, Wrench, ArrowUpRight } from "lucide-react";
import {
  demoAlerts,
  demoAdminSummary,
  demoVehicleHoldings,
  demoVehicleReadyForSale,
  demoVehicleMaintenance,
  demoVehicleSalesLedger,
} from "@/lib/demo-data";
import { StatCard } from "@/components/StatCard";
import { DataTable, type Column } from "@/components/DataTable";

type Holding = (typeof demoVehicleHoldings)[number];
type ReadyVehicle = (typeof demoVehicleReadyForSale)[number];
type MaintenanceVehicle = (typeof demoVehicleMaintenance)[number];
type SoldVehicle = (typeof demoVehicleSalesLedger)[number];

const holdingColumns: Column<Holding>[] = [
  {
    header: "Véhicule",
    cell: (row) => (
      <div className="flex flex-col">
        <span className="font-medium text-white">
          {row.brand} {row.model}
        </span>
        <span className="text-xs text-muted-foreground">VIN {row.vin}</span>
      </div>
    ),
  },
  {
    header: "Acquis",
    cell: (row) =>
      new Date(row.acquisitionDate).toLocaleDateString("fr-FR"),
  },
  {
    header: "Prix d'achat",
    cell: (row) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(row.purchasePrice),
  },
  {
    header: "Kilométrage",
    cell: (row) => `${row.mileage.toLocaleString("fr-FR")} km`,
  },
];

const readyColumns: Column<ReadyVehicle>[] = [
  {
    header: "Véhicule",
    cell: (row) => (
      <div className="flex flex-col">
        <span className="font-medium text-white">
          {row.brand} {row.model}
        </span>
      </div>
    ),
  },
  {
    header: "Mise en vente",
    cell: (row) =>
      new Date(row.listedDate).toLocaleDateString("fr-FR"),
  },
  {
    header: "Prix plancher",
    cell: (row) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(row.floorPrice),
  },
  {
    header: "Intéressés",
    cell: (row) => `${row.interestedBuyers}`,
  },
];

const maintenanceColumns: Column<MaintenanceVehicle>[] = [
  {
    header: "Véhicule",
    cell: (row) => (
      <div className="flex flex-col">
        <span className="font-medium text-white">
          {row.brand} {row.model}
        </span>
        <span className="text-xs text-muted-foreground">
          {row.operatorName}
        </span>
      </div>
    ),
  },
  {
    header: "Entrée atelier",
    cell: (row) =>
      new Date(row.enteredAt).toLocaleDateString("fr-FR"),
  },
  {
    header: "Retour estimé",
    cell: (row) =>
      new Date(row.eta).toLocaleDateString("fr-FR"),
  },
  {
    header: "Motif",
    accessor: "reason",
  },
];

const salesColumns: Column<SoldVehicle>[] = [
  {
    header: "Véhicule",
    cell: (row) => (
      <div className="flex flex-col">
        <span className="font-medium text-white">
          {row.brand} {row.model}
        </span>
      </div>
    ),
  },
  {
    header: "Vendu le",
    cell: (row) =>
      new Date(row.soldAt).toLocaleDateString("fr-FR"),
  },
  {
    header: "Montant",
    cell: (row) =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(row.salePrice),
    className: "text-right",
  },
  {
    header: "Acheteur",
    accessor: "buyer",
  },
];

export default function OverviewPage() {
  const totalBalance = demoAdminSummary.networkBalance;
  const holdingsCount = demoVehicleHoldings.length;
  const readyCount = demoVehicleReadyForSale.length;
  const maintenanceCount = demoVehicleMaintenance.length;

  const referenceDate = new Date("2025-10-20T00:00:00Z");
  const referenceYear = referenceDate.getUTCFullYear();
  const referenceMonth = referenceDate.getUTCMonth();

  const soldThisMonthList = demoVehicleSalesLedger.filter((sale) => {
    const soldDate = new Date(sale.soldAt);
    return (
      soldDate.getUTCFullYear() === referenceYear &&
      soldDate.getUTCMonth() === referenceMonth
    );
  });
  const soldThisMonth = soldThisMonthList.length;

  const ownedVehiclesSectionTitle = `Véhicules détenus (${holdingsCount})`;
  const readyVehiclesSectionTitle = `Prêts à la vente (${readyCount})`;
  const maintenanceSectionTitle = `En maintenance (${maintenanceCount})`;
  const soldVehiclesSectionTitle = `Vendus ce mois (${soldThisMonth})`;

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard
          title="Encours opérateurs"
          value={new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(totalBalance)}
          description="Somme des soldes partenaires"
          icon={Wallet}
          trend={{ value: "+8,2% vs N-1", isPositive: true }}
        />
        <StatCard
          title="Véhicules détenus"
          value={holdingsCount.toString()}
          description="Actifs disponibles dans la flotte"
          icon={Car}
          trend={{ value: "+2 ce trimestre", isPositive: true }}
        />
        <StatCard
          title="Prêts à la vente"
          value={readyCount.toString()}
          description="Listés sur la place de marché"
          icon={BadgeCheck}
          trend={{ value: "+1 cette semaine", isPositive: true }}
        />
        <StatCard
          title="En maintenance"
          value={maintenanceCount.toString()}
          description="Interventions atelier en cours"
          icon={Wrench}
          trend={{ value: "Suivi prioritaire", isPositive: false }}
        />
        <StatCard
          title="Vendus ce mois"
          value={soldThisMonth.toString()}
          description="Transactions finalisées"
          icon={ArrowUpRight}
          trend={{ value: "+2 clôtures", isPositive: true }}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              {ownedVehiclesSectionTitle}
            </h3>
            <DataTable
              columns={holdingColumns}
              data={demoVehicleHoldings}
              emptyState="Aucun véhicule détenu."
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              {readyVehiclesSectionTitle}
            </h3>
            <DataTable
              columns={readyColumns}
              data={demoVehicleReadyForSale}
              emptyState="Aucune annonce active."
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              {maintenanceSectionTitle}
            </h3>
            <DataTable
              columns={maintenanceColumns}
              data={demoVehicleMaintenance}
              emptyState="Aucune intervention programmée."
            />
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">
              {soldVehiclesSectionTitle}
            </h3>
            <DataTable
              columns={salesColumns}
              data={soldThisMonthList}
              emptyState="Aucune vente enregistrée pour ce mois."
            />
          </div>
        </div>
      </section>

      <div className="space-y-4 rounded-lg border border-border/60 bg-[#101b31]/60 p-6">
        <h3 className="text-lg font-semibold text-white">Alertes réseau</h3>
        <ul className="space-y-4">
          {demoAlerts.map((alert) => (
            <li
              key={alert.id}
              className="rounded-lg border border-border/50 bg-border/20 p-4 text-sm"
            >
              <p className="font-medium text-white">{alert.title}</p>
              <p className="mt-1 text-muted-foreground">
                {alert.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

