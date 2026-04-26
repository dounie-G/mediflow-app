import {
  Calendar,
  TrendingUp,
  TrendingDown,
  Users,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { mockStats, mockWeeklyData, mockMonthlyTrends, mockAppointments } from "../data/mockData";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Dashboard() {
  const { t } = useLanguage();
  const todayAppointments = mockAppointments.filter(
    (apt) => apt.date === "2026-04-11"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("dashboard.title")}</h1>
          <p className="text-gray-600">{t("dashboard.subtitle")}</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#1d4ed8]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-6 h-6 text-[#2563EB]" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm font-semibold bg-green-50/80 px-2.5 py-1 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>+12%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {mockStats.monthlyAppointments}
            </div>
            <div className="text-sm text-gray-600 font-medium">{t("dashboard.monthlyAppointments")}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm font-semibold bg-green-50/80 px-2.5 py-1 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>+5%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {mockStats.confirmationRate}%
            </div>
            <div className="text-sm text-gray-600 font-medium">{t("dashboard.confirmationRate")}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm font-semibold bg-green-50/80 px-2.5 py-1 rounded-full">
                <TrendingDown className="w-4 h-4" />
                <span>-18%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {mockStats.noShowRate}%
            </div>
            <div className="text-sm text-gray-600 font-medium">{t("dashboard.noShowRate")}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#14B8A6]/10 to-[#0d9488]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-[#14B8A6]" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm font-semibold bg-green-50/80 px-2.5 py-1 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>+8%</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">
              {mockStats.totalPatients}
            </div>
            <div className="text-sm text-gray-600 font-medium">{t("dashboard.activePatients")}</div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Weekly Activity Chart */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-lg font-bold text-gray-900 mb-6">
              {t("dashboard.weeklyActivity")}
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockWeeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar key="appointments-bar" dataKey="appointments" fill="#2563EB" name="Rendez-vous" radius={[8, 8, 0, 0]} />
                <Bar key="noShows-bar" dataKey="noShows" fill="#ef4444" name="Absences" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Today's Appointments */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">{t("dashboard.today")}</h2>
              <span className="text-sm text-gray-500 font-medium bg-gray-100/80 px-3 py-1 rounded-full">
                {todayAppointments.length} {t("dashboard.appointments")}
              </span>
            </div>
            <div className="space-y-3">
              {todayAppointments.slice(0, 4).map((apt) => (
                <div
                  key={apt.id}
                  className="group flex items-center gap-3 p-3 bg-gray-50/80 backdrop-blur-sm rounded-xl hover:bg-gray-100/80 hover:scale-102 transition-all duration-200 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB]/10 to-[#1d4ed8]/10 flex items-center justify-center text-[#2563EB] flex-shrink-0 text-sm font-semibold group-hover:scale-110 transition-transform duration-200">
                    {apt.patientName.split(" ")[0][0]}
                    {apt.patientName.split(" ")[1][0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm truncate">
                      {apt.patientName}
                    </div>
                    <div className="text-xs text-gray-500 font-medium">{apt.time}</div>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      apt.status === "confirmed"
                        ? "bg-green-500 animate-pulse"
                        : apt.status === "pending"
                        ? "bg-yellow-500 animate-pulse"
                        : "bg-red-500"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-lg transition-shadow duration-300 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            {t("dashboard.monthlyTrends")}
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={mockMonthlyTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis yAxisId="left" stroke="#9ca3af" />
              <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                key="appointments-line"
                yAxisId="left"
                type="monotone"
                dataKey="appointments"
                stroke="#2563EB"
                strokeWidth={3}
                name="Rendez-vous"
                dot={{ fill: "#2563EB", r: 4 }}
              />
              <Line
                key="satisfaction-line"
                yAxisId="right"
                type="monotone"
                dataKey="satisfaction"
                stroke="#14B8A6"
                strokeWidth={3}
                name="Satisfaction %"
                dot={{ fill: "#14B8A6", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("dashboard.averageWaitTime")}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {mockStats.averageWaitTime} min
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-orange-100 to-orange-50 group-hover:scale-110 transition-transform duration-300">
                <TrendingDown className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("dashboard.cancelRate")}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {mockStats.cancelRate}%
            </div>
          </div>

          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/60 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-xl bg-gradient-to-br from-green-100 to-green-50 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-sm text-gray-600 font-medium">{t("dashboard.patientSatisfaction")}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {mockStats.patientSatisfaction}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
