import Link from "next/link";
import { LoginForm } from "./LoginForm";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { redirect?: string };
}) {
  const redirectTo = searchParams?.redirect ?? "/dashboard/overview";

  return (
    <div className="space-y-6 rounded-2xl border border-border/70 bg-[#101b31]/60 p-8 shadow-xl backdrop-blur">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Connexion à la console admin
        </h2>
        <p className="text-sm text-muted-foreground">
          Surveillez les opérateurs, leurs soldes et l’état de la flotte en temps réel.
        </p>
      </div>
      <LoginForm redirectTo={redirectTo} />
      <div className="text-center text-sm text-muted-foreground">
        Besoin d’ajouter un opérateur ?{" "}
        <Link href="/auth/register" className="text-brand-light underline">
          Créer un accès opérateur
        </Link>
      </div>
    </div>
  );
}

