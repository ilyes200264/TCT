import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Franchise Hub | Authenticate",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full grid-cols-1 bg-background text-foreground lg:grid-cols-[1fr_480px]">
      <div className="relative hidden flex-col justify-between border-r border-border/50 p-12 lg:flex">
        <div className="space-y-6">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/20 text-2xl">
            🚗
          </span>
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-white">
              Franchise Hub Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Access wholesale pricing, unlimited service requests, and fleet
              performance insights in one secure place.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-border/40">
            <Image
              src="https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg"
              alt="Commercial fleet"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Powered by Franchise Hub Network
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-16">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}

