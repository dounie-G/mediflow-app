import { useState } from "react";
import { Link } from "react-router";
import {
  Users,
  Plus,
  Search,
  Phone,
  Mail,
  Calendar,
  AlertTriangle,
  TrendingUp,
  Eye,
} from "lucide-react";
import { mockPatients } from "../data/mockData";

export function Patients() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = mockPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRiskLevel = (score: number) => {
    if (score < 20) return { label: "Faible", color: "text-green-600", bg: "bg-green-100" };
    if (score < 50) return { label: "Moyen", color: "text-yellow-600", bg: "bg-yellow-100" };
    return { label: "Élevé", color: "text-red-600", bg: "bg-red-100" };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Patients</h1>
            <p className="text-gray-600">
              {mockPatients.length} patients enregistrés
            </p>
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-colors">
            <Plus className="w-5 h-5" />
            Nouveau patient
          </button>
        </div>

        {/* Search */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher un patient..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-5 h-5 text-[#2563EB]" />
              <span className="text-sm text-gray-600">Total patients</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">342</div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Nouveaux ce mois</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">28</div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <span className="text-sm text-gray-600">Risque élevé</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">12</div>
          </div>
        </div>

        {/* Patients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => {
            const risk = getRiskLevel(patient.riskScore);
            return (
              <div
                key={patient.id}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] font-semibold">
                      {patient.name.split(" ")[0][0]}
                      {patient.name.split(" ")[1][0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                      <p className="text-sm text-gray-500">{patient.age} ans</p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs ${risk.bg} ${risk.color}`}
                  >
                    <AlertTriangle className="w-3 h-3" />
                    {risk.label}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{patient.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span className="truncate">{patient.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Dernière visite:{" "}
                      {new Date(patient.lastVisit).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm">
                    <span className="text-gray-500">Visites: </span>
                    <span className="font-semibold text-gray-900">
                      {patient.totalVisits}
                    </span>
                  </div>
                  <Link
                    to={`/app/patients/${patient.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-[#2563EB] hover:bg-[#2563EB]/10 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    Voir détails
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
