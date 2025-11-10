"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { dashboardNavItems } from "@/lib/navigation";

interface SidebarProps {
  profile?: {
    name: string | null;
    licenseType: string | null;
  };
  footerSlot?: React.ReactNode;
}

export function Sidebar({ profile, footerSlot }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="hidden h-full min-w-[260px] flex-col justify-between border-r border-border/60 bg-[#0b1528]/90 px-5 py-8 text-sm shadow-xl md:flex">
      <div>
        <div className="mb-10">
          <Link href="/dashboard/overview" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 text-brand-light">
              🚗
            </span>
            <div>
              <p className="text-base font-semibold text-white">
                Fleet Admin
              </p>
              <p className="text-xs text-muted-foreground">
                Supervision du réseau
              </p>
            </div>
          </Link>
        </div>
        <div className="mb-8 space-y-2">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Profil administrateur
          </p>
          <div className="rounded-lg border border-border/30 bg-border/10 p-4">
            <p className="text-sm font-semibold text-foreground">
              {profile?.name ?? "Responsable réseau"}
            </p>
            <p className="text-xs text-muted-foreground">
              {profile?.licenseType ?? "Opérateurs suivis"}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Dossier : Ilyes Ghorieb
            </p>
          </div>
        </div>
        <nav className="space-y-1">
          {dashboardNavItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition hover:bg-brand/15",
                  isActive
                    ? "bg-brand/20 text-brand-light"
                    : "text-muted-foreground",
                )}
              >
                <Icon
                  className={cn(
                    "h-4 w-4 transition",
                    isActive ? "text-brand-light" : "text-muted-foreground",
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      {footerSlot ? (
        <div className="border-t border-border/30 pt-6">{footerSlot}</div>
      ) : null}
    </aside>
  );
}

