import { UploadCloud } from "lucide-react";
import { demoDocuments } from "@/lib/demo-data";
import { DataTable, type Column } from "@/components/DataTable";
import { Button } from "@/components/ui/button";

type DocumentRow = (typeof demoDocuments)[number];

const columns: Column<DocumentRow>[] = [
  { header: "Titre", accessor: "title" },
  { header: "Catégorie", accessor: "category" },
  { header: "Opérateur", accessor: "operatorName" },
  {
    header: "Ajouté le",
    cell: (row) =>
      new Date(row.createdAt).toLocaleDateString("fr-FR", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
  },
];

export default function DocumentsPage() {
  const documents = demoDocuments;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">Documents réseau</h1>
          <p className="text-sm text-muted-foreground">
            Contrats, pièces de conformité et justificatifs partagés par les opérateurs.
          </p>
        </div>
        <Button variant="outline" className="gap-2 border-brand/40 text-brand-light">
          <UploadCloud className="h-4 w-4" />
          Ajouter un document
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={documents}
        emptyState="Aucun document disponible."
      />
    </div>
  );
}

