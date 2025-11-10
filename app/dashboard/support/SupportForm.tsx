"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function SupportForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const subject = formData.get("subject")?.toString().trim();
    const type = formData.get("type")?.toString();
    const body = formData.get("message")?.toString().trim();

    if (!subject || !type || !body) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    setPending(true);
    setError(null);

    setTimeout(() => {
      setPending(false);
      setMessage("Demande enregistrée. Notre équipe reviendra vers vous rapidement.");
      form.reset();
    }, 600);
  }

  return (
    <form id="support-form" onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="subject">Sujet</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="Décrivez votre demande"
          disabled={pending}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="type">Type de demande</Label>
        <select
          id="type"
          name="type"
          defaultValue=""
          disabled={pending}
          required
          className="h-10 w-full rounded-md border border-input bg-muted/30 px-3 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="" disabled>
            Sélectionnez un type
          </option>
          <option value="mechanic">Support mécanique</option>
          <option value="wash">Service lavage</option>
        </select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Ajoutez les détails utiles pour accélérer la prise en charge."
          minLength={12}
          disabled={pending}
          required
        />
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
      <Button type="submit" className="w-full sm:w-auto" disabled={pending}>
        {pending ? "Envoi..." : "Envoyer la demande"}
      </Button>
    </form>
  );
}

