import Link from "next/link";
import { RegisterForm } from "./RegisterForm";

export default function RegisterPage() {
  return (
    <div className="space-y-6 rounded-2xl border border-border/70 bg-[#101b31]/60 p-8 shadow-xl backdrop-blur">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold text-white">
          Join the franchise network
        </h2>
        <p className="text-sm text-muted-foreground">
          Create your operator account to access wholesale vehicles and services.
        </p>
      </div>
      <RegisterForm />
      <div className="text-center text-sm text-muted-foreground">
        Already registered?{" "}
        <Link href="/auth/login" className="text-brand-light underline">
          Sign in instead
        </Link>
      </div>
    </div>
  );
}

