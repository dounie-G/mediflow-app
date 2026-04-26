import { Building, Users, Bell, CreditCard, Shield, Globe, Save } from "lucide-react";
import { mockDoctors } from "../data/mockData";
import { useState } from "react";

type SettingsTab = "clinic" | "doctors" | "notifications" | "billing" | "security";

export function Settings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>("clinic");

  const tabs = [
    { id: "clinic", label: "Clinique", icon: Building },
    { id: "doctors", label: "Praticiens", icon: Users },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "billing", label: "Facturation", icon: CreditCard },
    { id: "security", label: "Sécurité", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Paramètres</h1>
          <p className="text-gray-600">Gérez les paramètres de votre clinique</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as SettingsTab)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-[#2563EB] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* Clinic Settings */}
            {activeTab === "clinic" && (
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Informations de la clinique
                </h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom de la clinique
                    </label>
                    <input
                      type="text"
                      defaultValue="Clinique Saint-Louis"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        defaultValue="01 23 45 67 89"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue="contact@clinique-stlouis.fr"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adresse
                    </label>
                    <input
                      type="text"
                      defaultValue="15 Rue de la Santé, 75014 Paris"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site web
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="url"
                        defaultValue="https://www.clinique-stlouis.fr"
                        className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      Enregistrer les modifications
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Doctors */}
            {activeTab === "doctors" && (
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">Praticiens</h2>
                  <button className="px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors">
                    Ajouter un praticien
                  </button>
                </div>

                <div className="space-y-4">
                  {mockDoctors.map((doctor) => (
                    <div
                      key={doctor.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] font-semibold">
                          {doctor.name.split(" ")[0][0]}
                          {doctor.name.split(" ")[1][0]}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{doctor.name}</div>
                          <div className="text-sm text-gray-600">{doctor.specialty}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Patients</div>
                          <div className="font-semibold text-gray-900">{doctor.patients}</div>
                        </div>
                        <button className="px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                          Modifier
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notifications */}
            {activeTab === "notifications" && (
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Préférences de notifications
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">Rappels patients</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">SMS automatiques</div>
                          <div className="text-sm text-gray-600">
                            Envoyer un SMS 24h avant le RDV
                          </div>
                        </div>
                        <button className="relative w-12 h-6 bg-[#2563EB] rounded-full">
                          <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Emails automatiques</div>
                          <div className="text-sm text-gray-600">
                            Envoyer un email 48h avant le RDV
                          </div>
                        </div>
                        <button className="relative w-12 h-6 bg-[#2563EB] rounded-full">
                          <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">
                            Demande de confirmation
                          </div>
                          <div className="text-sm text-gray-600">
                            Demander confirmation 72h avant
                          </div>
                        </div>
                        <button className="relative w-12 h-6 bg-[#2563EB] rounded-full">
                          <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Notifications internes</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Alertes IA</div>
                          <div className="text-sm text-gray-600">
                            Recevoir les alertes du module IA
                          </div>
                        </div>
                        <button className="relative w-12 h-6 bg-[#2563EB] rounded-full">
                          <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-gray-900">Annulations</div>
                          <div className="text-sm text-gray-600">
                            Être notifié des annulations
                          </div>
                        </div>
                        <button className="relative w-12 h-6 bg-[#2563EB] rounded-full">
                          <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors">
                      <Save className="w-4 h-4" />
                      Enregistrer
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Billing */}
            {activeTab === "billing" && (
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Facturation</h2>

                <div className="bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-xl p-6 text-white mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-white/80">Plan actuel</div>
                      <div className="text-2xl font-bold">Plan Pro</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">79€</div>
                      <div className="text-sm text-white/80">/mois</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4" />
                    <span>Renouvellement automatique le 1er de chaque mois</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <h3 className="font-semibold text-gray-900">Fonctionnalités incluses</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Rendez-vous illimités",
                      "Jusqu'à 5 praticiens",
                      "Module IA complet",
                      "Analytics avancés",
                      "Rappels SMS/Email",
                      "Support prioritaire",
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-green-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Historique de facturation
                  </h3>
                  <div className="space-y-3">
                    {[
                      { date: "1 avril 2026", amount: "79€", status: "Payé" },
                      { date: "1 mars 2026", amount: "79€", status: "Payé" },
                      { date: "1 février 2026", amount: "79€", status: "Payé" },
                    ].map((invoice, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-5 h-5 text-gray-400" />
                          <div>
                            <div className="font-medium text-gray-900">{invoice.date}</div>
                            <div className="text-sm text-gray-600">{invoice.amount}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-green-600">{invoice.status}</span>
                          <button className="text-sm text-[#2563EB] hover:text-[#1d4ed8]">
                            Télécharger
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 mt-6">
                  <button className="text-red-600 hover:text-red-700 transition-colors">
                    Annuler l'abonnement
                  </button>
                </div>
              </div>
            )}

            {/* Security */}
            {activeTab === "security" && (
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Sécurité et confidentialité
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Modifier le mot de passe
                    </h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Mot de passe actuel
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nouveau mot de passe
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Confirmer le mot de passe
                        </label>
                        <input
                          type="password"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
                        />
                      </div>
                      <button className="px-6 py-2.5 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors">
                        Mettre à jour le mot de passe
                      </button>
                    </form>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Authentification à deux facteurs
                    </h3>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">
                          Activer l'authentification à deux facteurs
                        </div>
                        <div className="text-sm text-gray-600">
                          Ajoutez une couche de sécurité supplémentaire
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors">
                        Activer
                      </button>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Conformité RGPD
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                        <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">
                            Vos données sont sécurisées
                          </div>
                          <div className="text-sm text-gray-600">
                            Chiffrement AES-256, serveurs en France, conformité RGPD
                          </div>
                        </div>
                      </div>
                      <button className="text-sm text-[#2563EB] hover:text-[#1d4ed8]">
                        Télécharger mes données →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
