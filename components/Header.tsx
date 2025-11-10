"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  profile?: {
    name: string | null;
    balance: number | null;
    renewalDate: string | null;
  };
  rightSlot?: React.ReactNode;
}

export function Header({ profile, rightSlot }: HeaderProps) {
  const [query, setQuery] = useState("");

  return (
    <header className="sticky top-0 z-10 flex flex-col gap-4 border-b border-border/60 bg-background/90 px-6 py-4 backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">
            Console admin · {profile?.name ?? "Superviseur"}
          </h1>
          <p className="text-sm text-muted-foreground">
            Visualisez vos opérateurs, anticipez les renouvellements et gardez un œil sur la flotte.
          </p>
        </div>
        {rightSlot}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher un opérateur, une flotte ou un document..."
            className={cn(
              "pl-10",
              query
                ? "border-brand/60 ring-2 ring-brand/20"
                : "border-border/70",
            )}
          />
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="rounded-lg border border-border/40 bg-border/10 px-4 py-2">
            <p className="text-xs text-muted-foreground">Encours réseau</p>
            <p className="text-sm font-semibold text-white">
              $
              {profile?.balance !== null && profile?.balance !== undefined
                ? profile.balance.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                : "0.00"}
            </p>
          </div>
          <div className="rounded-lg border border-border/40 bg-border/10 px-4 py-2">
            <p className="text-xs text-muted-foreground">Renouvellements à suivre</p>
            <p className="text-sm font-semibold text-white">
              {profile?.renewalDate ?? "—"}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

