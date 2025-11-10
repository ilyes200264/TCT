import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VehicleCard } from "@/components/VehicleCard";
import { DataTable, type Column } from "@/components/DataTable";
import { Badge } from "@/components/ui/badge";
import {
  demoServiceRequests,
  demoVehicles,
} from "@/lib/demo-data";

type Vehicle = (typeof demoVehicles)[number];
type Service = (typeof demoServiceRequests)[number];

const serviceColumns: Column<Service>[] = [
  {
    header: "Date",
    cell: (row) => new Date(row.date).toLocaleDateString("fr-FR"),
  },
  { header: "Opérateur", accessor: "operatorName" },
  {
    header: "Type",
    cell: (row) => (
      <Badge variant={row.type === "mechanic" ? "secondary" : "outline"}>
        {row.type === "mechanic" ? "Mécanique" : "Lavage"}
      </Badge>
    ),
  },
  { header: "Statut", cell: (row) => <StatusBadge status={row.status} /> },
  {
    header: "Notes",
    accessor: "notes",
  },
];

export default function VehiclesPage() {
  const availableVehicles = demoVehicles.filter(
    (vehicle) => vehicle.status === "Available",
  );
  const assignedFleet = demoVehicles;
  const maintenanceHistory = demoServiceRequests.filter(
    (service) => service.type === "mechanic",
  );
  const washHistory = demoServiceRequests.filter(
    (service) => service.type === "wash",
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-white">Supervision de la flotte</h1>
        <p className="text-sm text-muted-foreground">
          Visualisez l’affectation des véhicules par opérateur, suivez les indisponibilités et anticipez les interventions.
        </p>
      </div>

      <Tabs defaultValue="available" className="space-y-6">
        <TabsList>
          <TabsTrigger value="available">Disponibles</TabsTrigger>
          <TabsTrigger value="assigned">Attribués</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="wash">Lavage</TabsTrigger>
        </TabsList>
        <TabsContent value="available" className="space-y-6">
          <VehicleGrid
            vehicles={availableVehicles}
            emptyMessage="Aucun véhicule disponible pour le moment."
          />
        </TabsContent>
        <TabsContent value="assigned" className="space-y-6">
          <VehicleGrid
            vehicles={assignedFleet}
            emptyMessage="Aucun véhicule n’est attribué pour l’instant."
          />
        </TabsContent>
        <TabsContent value="maintenance">
          <DataTable
            columns={serviceColumns}
            data={maintenanceHistory}
            emptyState="Aucune intervention technique en attente."
          />
        </TabsContent>
        <TabsContent value="wash">
          <DataTable
            columns={serviceColumns}
            data={washHistory}
            emptyState="Aucun lavage planifié."
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function VehicleGrid({
  vehicles,
  emptyMessage,
}: {
  vehicles: Vehicle[];
  emptyMessage: string;
}) {
  if (!vehicles.length) {
    return (
      <div className="rounded-lg border border-border/60 bg-[#101b31]/50 p-8 text-center text-sm text-muted-foreground">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {vehicles.map((vehicle) => (
        <VehicleCard
          key={vehicle.id}
          brand={vehicle.brand}
          model={vehicle.model}
          price={vehicle.price}
          operator={vehicle.operatorName}
          status={vehicle.status}
          imageUrl={vehicle.imageUrl}
        />
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: Service["status"] }) {
  if (status === "Done") {
    return <Badge variant="success">Terminé</Badge>;
  }
  if (status === "Scheduled") {
    return <Badge variant="warning">Planifié</Badge>;
  }
  return <Badge variant="secondary">Ouvert</Badge>;
}

