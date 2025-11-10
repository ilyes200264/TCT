import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { demoAdminSummary } from "@/lib/demo-data";
import { dashboardNavItems } from "@/lib/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const summary = demoAdminSummary;

  return (
    <div className="flex min-h-screen w-full bg-background text-foreground">
      <Sidebar
        profile={{
          name: summary.adminName,
          licenseType: `${summary.totalOperators} opérateurs`,
        }}
        footerSlot={<FooterActions />}
      />
      <div className="flex-1">
        <MobileNav />
        <Header
          profile={{
            name: summary.adminName,
            balance: summary.networkBalance,
            renewalDate: `${summary.upcomingRenewals} renouvellements`,
          }}
          rightSlot={
            <div className="hidden items-center gap-3 md:flex">
              <Button variant="outline" className="border-brand/40 text-brand-light">
                Exporter la liste opérateurs
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Déconnexion</Link>
              </Button>
            </div>
          }
        />
        <main className="space-y-6 px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}

function FooterActions() {
  return (
    <div className="space-y-2">
      <p className="text-xs text-muted-foreground">
        Besoin d’aide ? Contactez le support réseau ou consultez le guide opérateur.
      </p>
      <p className="text-xs text-muted-foreground">
        Dossier actuellement suivi : Ilyes Ghorieb
      </p>
      <Button variant="ghost" asChild className="w-full justify-start">
        <Link href="/auth/login">Déconnexion</Link>
      </Button>
    </div>
  );
}

function MobileNav() {
  return (
    <div className="sticky top-0 z-20 border-b border-border/60 bg-background/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Console admin</h2>
          <p className="text-xs text-muted-foreground">
            Accès rapide aux sections clés
          </p>
        </div>
        <div className="flex gap-2 text-sm">
          {dashboardNavItems.slice(0, 3).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md border border-border/40 px-3 py-1 text-muted-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

