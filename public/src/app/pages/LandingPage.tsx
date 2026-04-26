import { Link } from "react-router";
import {
  Calendar,
  Clock,
  TrendingDown,
  Users,
  Sparkles,
  Bell,
  BarChart3,
  Shield,
  Check,
  ArrowRight,
  Star,
  Globe,
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import logoImg from "../../imports/MediFlow_logo_.png";

export function LandingPage() {
  const { language, setLanguage, t } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logoImg} alt="MediFlow" className="h-12 transition-transform duration-300 group-hover:scale-105" />
            </Link>
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                  className="group flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-100/80 rounded-xl transition-all duration-200"
                >
                  <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                  <span className="hidden sm:inline font-medium">{language === "fr" ? "FR" : "EN"}</span>
                </button>
                {showLanguageMenu && (
                  <div className="absolute right-0 top-full mt-2 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-xl shadow-2xl overflow-hidden min-w-[140px]">
                    <button
                      onClick={() => {
                        setLanguage("fr");
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-2.5 text-sm text-left hover:bg-gray-50/80 transition-colors ${
                        language === "fr" ? "bg-blue-50/50 font-semibold text-[#2563EB]" : ""
                      }`}
                    >
                      🇫🇷 Français
                    </button>
                    <button
                      onClick={() => {
                        setLanguage("en");
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-2.5 text-sm text-left hover:bg-gray-50/80 transition-colors ${
                        language === "en" ? "bg-blue-50/50 font-semibold text-[#2563EB]" : ""
                      }`}
                    >
                      🇬🇧 English
                    </button>
                  </div>
                )}
              </div>

              <Link
                to="/login"
                className="font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {t("nav.login")}
              </Link>
              <Link
                to="/signup"
                className="group px-6 py-2.5 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 font-medium"
              >
                {t("nav.signup")}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#14B8A6]/10 to-[#0d9488]/10 text-[#14B8A6] rounded-full mb-6 border border-[#14B8A6]/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="text-sm font-semibold">{t("landing.aiPowered")}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t("landing.hero.title")}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t("landing.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  {t("landing.hero.startFree")}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl hover:border-gray-300 hover:bg-gray-50/50 transition-all duration-300 font-semibold backdrop-blur-sm">
                  {t("landing.hero.viewDemo")}
                </button>
              </div>
              <div className="flex items-center gap-8 mt-12">
                <div>
                  <div className="text-3xl font-bold text-gray-900">-65%</div>
                  <div className="text-sm text-gray-600">{t("landing.stats.absences")}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">+40%</div>
                  <div className="text-sm text-gray-600">{t("landing.stats.efficiency")}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">94%</div>
                  <div className="text-sm text-gray-600">{t("landing.stats.satisfaction")}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2563EB] to-[#14B8A6] rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#2563EB] to-[#14B8A6] rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Aujourd'hui</div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { time: "09:00", patient: "Marie Dubois", status: "confirmed" },
                      { time: "10:30", patient: "Pierre Lefebvre", status: "confirmed" },
                      { time: "14:00", patient: "Claire Moreau", status: "pending" },
                    ].map((apt, i) => (
                      <div
                        key={i}
                        className="group flex items-center gap-3 p-3 bg-gray-50/80 backdrop-blur-sm rounded-xl hover:bg-gray-100/80 transition-all duration-200 hover:scale-102 cursor-pointer"
                      >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB]/10 to-[#1d4ed8]/10 flex items-center justify-center text-[#2563EB] flex-shrink-0 font-semibold group-hover:scale-110 transition-transform duration-200">
                          {apt.patient.split(" ")[0][0]}
                          {apt.patient.split(" ")[1][0]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-gray-900 truncate">
                            {apt.patient}
                          </div>
                          <div className="text-sm text-gray-500">{apt.time}</div>
                        </div>
                        <div
                          className={`w-2 h-2 rounded-full ${
                            apt.status === "confirmed" ? "bg-green-500 animate-pulse" : "bg-yellow-500 animate-pulse"
                          }`}
                        ></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-xl rounded-xl p-4 shadow-2xl border border-gray-200/60">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#14B8A6] animate-pulse" />
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Risque absence</div>
                    <div className="text-lg font-bold bg-gradient-to-r from-[#14B8A6] to-[#0d9488] bg-clip-text text-transparent">-78%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("landing.problems.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("landing.problems.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Taux d'absence élevé",
                description:
                  "15-30% de no-shows génèrent des pertes importantes et désorganisent votre planning.",
              },
              {
                icon: Clock,
                title: "Temps perdu",
                description:
                  "Gestion manuelle chronophage des rappels, confirmations et reprogrammations.",
              },
              {
                icon: Users,
                title: "Expérience dégradée",
                description:
                  "Délais d'attente, oublis de rappels et manque de communication frustrent vos patients.",
              },
            ].map((problem, i) => {
              const Icon = problem.icon;
              return (
                <div key={i} className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("landing.features.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("landing.features.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Planning intelligent",
                description:
                  "Calendrier optimisé automatiquement selon vos disponibilités et préférences.",
              },
              {
                icon: Bell,
                title: "Rappels automatiques",
                description:
                  "SMS et emails envoyés automatiquement pour réduire les absences.",
              },
              {
                icon: Sparkles,
                title: "IA prédictive",
                description:
                  "Détection des risques d'absence et suggestions d'optimisation du planning.",
              },
              {
                icon: BarChart3,
                title: "Analytics avancés",
                description:
                  "Tableaux de bord complets pour suivre vos performances en temps réel.",
              },
              {
                icon: Users,
                title: "Gestion patients",
                description:
                  "Fiches complètes avec historique et notes pour un suivi optimal.",
              },
              {
                icon: Shield,
                title: "Sécurité RGPD",
                description:
                  "Données chiffrées et conformité totale aux normes médicales.",
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="group">
                  <div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563EB] transition-colors">
                    <Icon className="w-6 h-6 text-[#2563EB] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("landing.testimonials.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Marie Laurent",
                role: "Clinique du Parc",
                content:
                  "MediFlow a réduit nos absences de 70%. L'IA prédictive est bluffante et nous fait gagner un temps précieux.",
                rating: 5,
              },
              {
                name: "Dr. Pierre Rousseau",
                role: "Cabinet Médical Central",
                content:
                  "Interface simple et efficace. Nos patients apprécient les rappels automatiques et notre organisation s'est considérablement améliorée.",
                rating: 5,
              },
              {
                name: "Sophie Martin",
                role: "Centre de Santé Saint-Louis",
                content:
                  "Un outil indispensable. Le module IA nous permet d'optimiser notre planning et de servir plus de patients.",
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("landing.pricing.title")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("landing.pricing.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Gratuit",
                price: "0€",
                period: "/mois",
                features: [
                  "Jusqu'à 50 rendez-vous/mois",
                  "1 praticien",
                  "Rappels SMS basiques",
                  "Support email",
                ],
                cta: "Commencer",
                highlighted: false,
              },
              {
                name: "Pro",
                price: "79€",
                period: "/mois",
                features: [
                  "Rendez-vous illimités",
                  "Jusqu'à 5 praticiens",
                  "IA prédictive complète",
                  "Analytics avancés",
                  "Support prioritaire",
                ],
                cta: "Essai gratuit 14 jours",
                highlighted: true,
              },
              {
                name: "Entreprise",
                price: "Sur mesure",
                period: "",
                features: [
                  "Tout illimité",
                  "Intégration personnalisée",
                  "Formation dédiée",
                  "Support 24/7",
                  "SLA garanti",
                ],
                cta: "Nous contacter",
                highlighted: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 ${
                  plan.highlighted
                    ? "bg-[#2563EB] text-white shadow-2xl scale-105"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                <div className="text-center mb-8">
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="flex items-end justify-center gap-1">
                    <span
                      className={`text-4xl font-bold ${
                        plan.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-lg mb-1 ${
                        plan.highlighted ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-white" : "text-[#14B8A6]"
                        }`}
                      />
                      <span
                        className={plan.highlighted ? "text-white" : "text-gray-600"}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`block w-full py-3 rounded-lg text-center transition-colors ${
                    plan.highlighted
                      ? "bg-white text-[#2563EB] hover:bg-gray-100"
                      : "bg-[#2563EB] text-white hover:bg-[#1d4ed8]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#2563EB] to-[#14B8A6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {t("landing.cta.title")}
          </h2>
          <p className="text-xl text-white/90 mb-8">
            {t("landing.cta.subtitle")}
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-4 bg-white text-[#2563EB] rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t("landing.hero.startFree")}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src={logoImg} alt="MediFlow" className="h-8 brightness-0 invert" />
              </Link>
              <p className="text-sm">{t("landing.tagline")}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produit</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Démo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Légal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Confidentialité
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    CGU
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    RGPD
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            © 2026 MediFlow. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
