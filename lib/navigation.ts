import {
  LayoutDashboard,
  Wallet,
  CarFront,
  BadgeCheck,
  BarChart3,
  LifeBuoy,
  FileText,
  Settings,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const dashboardNavItems: NavItem[] = [
  { label: "Vue d'ensemble", href: "/dashboard/overview", icon: LayoutDashboard },
  { label: "Finances", href: "/dashboard/finances", icon: Wallet },
  { label: "Flotte", href: "/dashboard/vehicles", icon: CarFront },
  {
    label: "Licences",
    href: "/dashboard/subscription",
    icon: BadgeCheck,
  },
  { label: "Statistiques", href: "/dashboard/stats", icon: BarChart3 },
  { label: "Support", href: "/dashboard/support", icon: LifeBuoy },
  { label: "Documents", href: "/dashboard/documents", icon: FileText },
  { label: "Paramètres", href: "/dashboard/settings", icon: Settings },
];

