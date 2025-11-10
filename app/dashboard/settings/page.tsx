import { CreditCard, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileForm } from "./ProfileForm";
import { PasswordForm } from "./PasswordForm";

const adminProfile = {
  name: "Sophie Durant",
  phone: "+33 (0)1 84 88 90 90",
  address: "Siège Fleet Admin · 12 rue Lafayette, 75009 Paris",
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-white">Paramètres</h1>
        <p className="text-sm text-muted-foreground">
          Mettez à jour vos informations administrateur, vos préférences de sécurité et vos options de facturation réseau.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-[#101b31]/60">
          <CardHeader>
            <CardTitle className="text-white">Profil administrateur</CardTitle>
          </CardHeader>
          <CardContent>
            <ProfileForm
              defaultValues={{
                name: adminProfile.name,
                phone: adminProfile.phone,
                address: adminProfile.address,
              }}
            />
          </CardContent>
        </Card>

        <Card className="bg-[#101b31]/60">
          <CardHeader>
            <CardTitle className="text-white">Modifier le mot de passe</CardTitle>
          </CardHeader>
          <CardContent>
            <PasswordForm />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-[#101b31]/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <CreditCard className="h-5 w-5 text-brand-light" />
              Facturation réseau
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <p>
              Ajoutez un moyen de paiement pour automatiser les renouvellements de licences et la refacturation des services.
            </p>
            <p>
              Carte enregistrée : <span className="text-white">•••• 4242</span> (expire 08/27)
            </p>
            <p>Intégrez votre passerelle de paiement interne pour activer la facturation automatique.</p>
          </CardContent>
        </Card>

        <Card className="bg-[#101b31]/60">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <ShieldCheck className="h-5 w-5 text-brand-light" />
              Bonnes pratiques sécurité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-muted-foreground">
            <p>Activez le MFA pour tous les comptes admin et révisez les accès opérateurs chaque trimestre.</p>
            <p>Contrôlez la liste des appareils autorisés et révoquez les sessions inactives.</p>
            <p>Escaladez au support si des factures ou ordres de service non reconnus apparaissent.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

