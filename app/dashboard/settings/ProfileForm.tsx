"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ProfileForm({
  defaultValues,
}: {
  defaultValues: {
    name: string | null;
    phone: string | null;
    address: string | null;
  };
}) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim();
    if (!name) {
      setError("Le nom est obligatoire.");
      return;
    }

    setPending(true);
    setError(null);

    setTimeout(() => {
      setPending(false);
      setMessage("Profil mis à jour (simulation).");
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Nom complet</Label>
          <Input
            id="name"
            name="name"
            defaultValue={defaultValues.name ?? ""}
            disabled={pending}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            name="phone"
            defaultValue={defaultValues.phone ?? ""}
            disabled={pending}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Adresse</Label>
        <Textarea
          id="address"
          name="address"
          defaultValue={defaultValues.address ?? ""}
          placeholder="Rue, Ville, Pays"
          rows={3}
          disabled={pending}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="language">Langue préférée</Label>
          <select
            id="language"
            name="language"
            defaultValue="en"
            disabled={pending}
            className="h-10 w-full rounded-md border border-input bg-muted/30 px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <option value="en">Anglais</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="notifications">Notifications</Label>
          <div className="flex items-center gap-2 rounded-md border border-border/50 bg-border/10 p-3">
            <input
              id="notifications"
              type="checkbox"
              name="notifications"
              className="h-4 w-4 rounded border-border bg-background"
              defaultChecked
              disabled={pending}
            />
            <span className="text-sm text-muted-foreground">
              Recevoir les rappels d’interventions et de renouvellement
            </span>
          </div>
        </div>
      </div>
      {error ? (
        <div className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      ) : null}
      {message ? (
        <div className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
          {message}
        </div>
      ) : null}
      <Button type="submit" disabled={pending}>
        {pending ? "Enregistrement..." : "Enregistrer"}
      </Button>
    </form>
  );
}

