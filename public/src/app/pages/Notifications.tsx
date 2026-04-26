import { Bell, CheckCircle, XCircle, AlertCircle, Sparkles, Filter } from "lucide-react";
import { mockNotifications } from "../data/mockData";
import { useState } from "react";

type NotificationType = "all" | "reminder" | "cancellation" | "confirmation" | "ai-alert";

export function Notifications() {
  const [filter, setFilter] = useState<NotificationType>("all");

  const filteredNotifications =
    filter === "all"
      ? mockNotifications
      : mockNotifications.filter((n) => n.type === filter);

  const getIcon = (type: string) => {
    switch (type) {
      case "reminder":
        return { Icon: Bell, color: "text-[#2563EB]", bg: "bg-[#2563EB]/10" };
      case "cancellation":
        return { Icon: XCircle, color: "text-red-600", bg: "bg-red-100" };
      case "confirmation":
        return { Icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" };
      case "ai-alert":
        return { Icon: Sparkles, color: "text-[#14B8A6]", bg: "bg-[#14B8A6]/10" };
      default:
        return { Icon: AlertCircle, color: "text-gray-600", bg: "bg-gray-100" };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
          <p className="text-gray-600">Restez informé de l'activité de votre clinique</p>
        </div>

        {/* Filter */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Filtrer par type</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { value: "all", label: "Toutes" },
              { value: "reminder", label: "Rappels" },
              { value: "confirmation", label: "Confirmations" },
              { value: "cancellation", label: "Annulations" },
              { value: "ai-alert", label: "Alertes IA" },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value as NotificationType)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  filter === option.value
                    ? "bg-[#2563EB] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Bell className="w-5 h-5 text-[#2563EB]" />
              <span className="text-sm text-gray-600">Aujourd'hui</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">12</div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Confirmations</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">8</div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-5 h-5 text-[#14B8A6]" />
              <span className="text-sm text-gray-600">Alertes IA</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">3</div>
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.map((notification) => {
            const { Icon, color, bg } = getIcon(notification.type);
            return (
              <div
                key={notification.id}
                className={`bg-white rounded-xl p-6 border transition-all ${
                  notification.read
                    ? "border-gray-200"
                    : "border-[#2563EB] shadow-sm"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-gray-900">
                        {notification.title}
                      </h3>
                      <span className="text-sm text-gray-500 flex-shrink-0">
                        {notification.time}
                      </span>
                    </div>
                    <p className="text-gray-600">{notification.message}</p>
                    {!notification.read && (
                      <button className="mt-3 text-sm text-[#2563EB] hover:text-[#1d4ed8] transition-colors">
                        Marquer comme lu
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredNotifications.length === 0 && (
          <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
            <Bell className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Aucune notification
            </h3>
            <p className="text-gray-600">
              Vous n'avez pas de notifications de ce type pour le moment
            </p>
          </div>
        )}

        {/* SMS/Email Settings */}
        <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
          <h2 className="font-semibold text-gray-900 mb-6">
            Paramètres de rappels automatiques
          </h2>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Rappels SMS</div>
                <div className="text-sm text-gray-600">
                  Envoyer un SMS 24h avant le rendez-vous
                </div>
              </div>
              <button className="relative w-12 h-6 bg-[#2563EB] rounded-full transition-colors">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Rappels Email</div>
                <div className="text-sm text-gray-600">
                  Envoyer un email 48h avant le rendez-vous
                </div>
              </div>
              <button className="relative w-12 h-6 bg-[#2563EB] rounded-full transition-colors">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Confirmations automatiques</div>
                <div className="text-sm text-gray-600">
                  Demander une confirmation 72h avant
                </div>
              </div>
              <button className="relative w-12 h-6 bg-[#2563EB] rounded-full transition-colors">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Alertes IA</div>
                <div className="text-sm text-gray-600">
                  Recevoir des alertes sur les risques d'absence
                </div>
              </div>
              <button className="relative w-12 h-6 bg-[#2563EB] rounded-full transition-colors">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
