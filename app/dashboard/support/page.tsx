import { LifeBuoy, MessageSquare, Phone } from "lucide-react";
import { SupportForm } from "./SupportForm";
import { demoSupportTickets } from "@/lib/demo-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function SupportPage() {
  const tickets = demoSupportTickets;

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
      <Card className="bg-[#101b31]/60">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-white">
            <LifeBuoy className="h-5 w-5 text-brand-light" />
            Ouvrir une demande réseau
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SupportForm />
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="bg-[#101b31]/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <MessageSquare className="h-5 w-5 text-brand-light" />
              Historique des tickets
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="rounded-lg border border-border/60 bg-border/20 p-4"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {ticket.subject}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {ticket.operatorName} ·{" "}
                      {new Date(ticket.createdAt).toLocaleString("fr-FR")}
                    </p>
                  </div>
                  <Badge
                    className={cn(
                      "capitalize",
                      ticket.status === "done"
                        ? "bg-emerald-500/15 text-emerald-200"
                        : ticket.status === "scheduled"
                          ? "bg-amber-500/15 text-amber-200"
                          : "bg-sky-500/10 text-sky-200",
                    )}
                  >
                    {ticket.status === "done"
                      ? "Clôturé"
                      : ticket.status === "scheduled"
                        ? "Planifié"
                        : "Ouvert"}
                  </Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {ticket.message}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-[#101b31]/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Phone className="h-5 w-5 text-brand-light" />
              Assistance directe
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>
              Hotline prioritaire :{" "}
              <span className="text-white">+33 (0)1 84 88 90 90</span>
            </p>
            <p>
              Email support réseau :{" "}
              <span className="text-white">support@fleet-admin.com</span>
            </p>
            <p>Notre engagement : réponse sous 4 heures ouvrées.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

