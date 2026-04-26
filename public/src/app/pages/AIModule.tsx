import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Lightbulb,
  Calendar,
  Brain,
  BarChart3,
  Target,
} from "lucide-react";
import { mockAIInsights, mockWeeklyData } from "../data/mockData";
import { motion } from "motion/react";

export function AIModule() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return { bg: "bg-red-100", text: "text-red-700", border: "border-red-200" };
      case "medium":
        return { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200" };
      case "low":
        return { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200" };
      default:
        return { bg: "bg-gray-100", text: "text-gray-700", border: "border-gray-200" };
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "optimization":
        return { Icon: TrendingUp, color: "text-[#14B8A6]" };
      case "risk":
        return { Icon: AlertTriangle, color: "text-red-600" };
      case "pattern":
        return { Icon: BarChart3, color: "text-[#2563EB]" };
      case "suggestion":
        return { Icon: Lightbulb, color: "text-yellow-600" };
      default:
        return { Icon: Sparkles, color: "text-gray-600" };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#14B8A6] flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Module IA</h1>
              <p className="text-gray-600">Intelligence artificielle pour optimiser votre planning</p>
            </div>
          </div>
        </div>

        {/* AI Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] rounded-xl p-6 text-white"
          >
            <div className="flex items-center justify-between mb-4">
              <Sparkles className="w-8 h-8" />
              <span className="text-xs bg-white/20 px-2 py-1 rounded-full">IA Active</span>
            </div>
            <div className="text-3xl font-bold mb-1">94%</div>
            <div className="text-sm text-white/80">Précision prédictive</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-[#14B8A6]" />
              <span className="text-sm text-gray-600">Optimisations</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">23</div>
            <div className="text-sm text-gray-600">Ce mois</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-white rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <span className="text-sm text-gray-600">Alertes détectées</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">8</div>
            <div className="text-sm text-gray-600">Cette semaine</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="bg-white rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
              <span className="text-sm text-gray-600">Taux de remplissage</span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-1">87%</div>
            <div className="text-sm text-gray-600">+12% vs mois dernier</div>
          </motion.div>
        </div>

        {/* AI Insights */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Recommandations intelligentes
            </h2>
            <button className="text-sm text-[#2563EB] hover:text-[#1d4ed8] transition-colors">
              Tout voir
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mockAIInsights.map((insight, i) => {
              const { Icon, color } = getTypeIcon(insight.type);
              const priority = getPriorityColor(insight.priority);

              return (
                <motion.div
                  key={insight.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className={`bg-white rounded-xl p-6 border-2 ${priority.border} hover:shadow-lg transition-all`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2563EB]/10 to-[#14B8A6]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className={`w-6 h-6 ${color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {insight.title}
                        </h3>
                        <span
                          className={`inline-flex px-2.5 py-1 rounded-full text-xs ${priority.bg} ${priority.text} flex-shrink-0`}
                        >
                          {insight.priority === "high"
                            ? "Priorité haute"
                            : insight.priority === "medium"
                            ? "Priorité moyenne"
                            : "Priorité basse"}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{insight.message}</p>
                      <div className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                        <Lightbulb className="w-4 h-4 text-[#14B8A6] flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-gray-700">{insight.impact}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button className="text-sm text-[#2563EB] hover:text-[#1d4ed8] transition-colors">
                      Appliquer la recommandation →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* AI Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Predictive Analysis */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#2563EB]" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Analyse prédictive
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Probabilité d'absences</span>
                  <span className="font-semibold text-gray-900">8.5%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500" style={{ width: "91.5%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Taux de confirmation prévu</span>
                  <span className="font-semibold text-gray-900">92%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#14B8A6]" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Remplissage optimal</span>
                  <span className="font-semibold text-gray-900">87%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#2563EB]" style={{ width: "87%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Scheduling */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-[#14B8A6]" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900">
                Planification intelligente
              </h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-[#2563EB]">1</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">
                    Créneaux optimaux détectés
                  </div>
                  <div className="text-sm text-gray-600">
                    Mardi 14h-16h disponible pour 2 nouveaux RDV
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-[#2563EB]">2</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">
                    Préférences patients analysées
                  </div>
                  <div className="text-sm text-gray-600">
                    5 patients préfèrent les créneaux matinaux
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-[#2563EB]">3</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900 mb-1">
                    Suggestion de double réservation
                  </div>
                  <div className="text-sm text-gray-600">
                    Vendredi PM : risque d'absence élevé
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Comment fonctionne notre IA ?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Apprentissage continu</h3>
              <p className="text-white/80 text-sm">
                L'IA analyse vos données historiques pour comprendre les patterns et
                tendances de votre clinique
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Prédictions précises</h3>
              <p className="text-white/80 text-sm">
                Détecte les risques d'absence avec une précision de 94% pour anticiper
                les problèmes
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Optimisation automatique</h3>
              <p className="text-white/80 text-sm">
                Suggère des ajustements pour maximiser votre taux de remplissage et
                réduire les pertes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
