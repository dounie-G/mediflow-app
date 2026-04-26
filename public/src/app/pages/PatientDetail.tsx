import { useParams, Link } from "react-router";
import {
  ArrowLeft,
  Phone,
  Mail,
  Calendar,
  AlertTriangle,
  FileText,
  Clock,
  Edit2,
} from "lucide-react";
import { mockPatients, mockAppointments } from "../data/mockData";

export function PatientDetail() {
  const { id } = useParams();
  const patient = mockPatients.find((p) => p.id === Number(id));

  if (!patient) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Patient non trouvé</h2>
          <Link to="/app/patients" className="text-[#2563EB] hover:text-[#1d4ed8]">
            Retour à la liste
          </Link>
        </div>
      </div>
    );
  }

  const patientAppointments = mockAppointments.filter(
    (apt) => apt.patientName === patient.name
  );

  const getRiskLevel = (score: number) => {
    if (score < 20) return { label: "Faible", color: "text-green-600", bg: "bg-green-100" };
    if (score < 50) return { label: "Moyen", color: "text-yellow-600", bg: "bg-yellow-100" };
    return { label: "Élevé", color: "text-red-600", bg: "bg-red-100" };
  };

  const risk = getRiskLevel(patient.riskScore);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/app/patients"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux patients
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] text-2xl font-semibold flex-shrink-0">
                {patient.name.split(" ")[0][0]}
                {patient.name.split(" ")[1][0]}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {patient.name}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {patient.age} ans
                  </span>
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {patient.phone}
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {patient.email}
                  </span>
                </div>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors">
              <Edit2 className="w-4 h-4" />
              Modifier
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Stats */}
          <div className="space-y-6">
            {/* Risk Score */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">Risque d'absence</h2>
              <div className="flex items-center justify-between mb-3">
                <span className={`text-4xl font-bold ${risk.color}`}>
                  {patient.riskScore}%
                </span>
                <span
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm ${risk.bg} ${risk.color}`}
                >
                  <AlertTriangle className="w-4 h-4" />
                  {risk.label}
                </span>
              </div>
              <p className="text-sm text-gray-600">
                Score calculé par l'IA en fonction de l'historique du patient
              </p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">Statistiques</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-600">Total visites</span>
                    <span className="font-semibold text-gray-900">
                      {patient.totalVisits}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2563EB]"
                      style={{ width: `${(patient.totalVisits / 50) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-1">Dernière visite</div>
                  <div className="font-semibold text-gray-900">
                    {new Date(patient.lastVisit).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </div>
                </div>
                {patient.nextAppointment && (
                  <div className="pt-3 border-t border-gray-200">
                    <div className="text-sm text-gray-600 mb-1">Prochain RDV</div>
                    <div className="font-semibold text-gray-900">
                      {new Date(patient.nextAppointment).toLocaleDateString("fr-FR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - History & Notes */}
          <div className="lg:col-span-2 space-y-6">
            {/* Appointment History */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="font-semibold text-gray-900 mb-4">
                Historique des rendez-vous
              </h2>
              <div className="space-y-3">
                {patientAppointments.length > 0 ? (
                  patientAppointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <div>
                            <div className="font-medium text-gray-900">
                              {apt.type}
                            </div>
                            <div className="text-sm text-gray-600">
                              {apt.doctorName}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500 text-right flex-shrink-0">
                            <div>
                              {new Date(apt.date).toLocaleDateString("fr-FR")}
                            </div>
                            <div>{apt.time}</div>
                          </div>
                        </div>
                        {apt.notes && (
                          <p className="text-sm text-gray-600">{apt.notes}</p>
                        )}
                        <div className="mt-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs ${
                              apt.status === "confirmed"
                                ? "bg-green-100 text-green-700"
                                : apt.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {apt.status === "confirmed"
                              ? "Confirmé"
                              : apt.status === "pending"
                              ? "En attente"
                              : "Annulé"}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    Aucun rendez-vous enregistré
                  </div>
                )}
              </div>
            </div>

            {/* Clinical Notes */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Notes cliniques</h2>
                <button className="text-sm text-[#2563EB] hover:text-[#1d4ed8] transition-colors">
                  Ajouter une note
                </button>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <FileText className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-gray-900">
                          Consultation de suivi
                        </div>
                        <div className="text-sm text-gray-500">
                          15 mars 2026
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Patient en bonne santé générale. Traitement prescrit fonctionne
                        bien. Prévoir contrôle dans 3 mois.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start gap-3 mb-2">
                    <FileText className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium text-gray-900">
                          Première consultation
                        </div>
                        <div className="text-sm text-gray-500">
                          12 janvier 2026
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Nouvelle patiente. Antécédents familiaux notés. Analyses
                        sanguines prescrites. RDV de suivi programmé.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
