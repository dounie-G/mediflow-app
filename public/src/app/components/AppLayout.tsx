import { Outlet, Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Bell,
  Sparkles,
  Settings,
  LogOut,
  Menu,
  X,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import logoImg from "../../imports/MediFlow_logo_.png";

export function AppLayout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { icon: LayoutDashboard, label: t("nav.dashboard"), path: "/app" },
    { icon: Calendar, label: t("nav.appointments"), path: "/app/appointments" },
    { icon: Users, label: t("nav.patients"), path: "/app/patients" },
    { icon: Bell, label: t("nav.notifications"), path: "/app/notifications" },
    { icon: Sparkles, label: t("nav.aiModule"), path: "/app/ai" },
    { icon: Settings, label: t("nav.settings"), path: "/app/settings" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50/50">
      {/* Sidebar Desktop */}
      <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-white/80 backdrop-blur-xl border-r border-gray-200/60 shadow-sm">
        <div className="flex flex-col flex-1 min-h-0">
          {/* Logo */}
          <div className="flex items-center h-20 px-6 border-b border-gray-200/60">
            <Link to="/app" className="flex items-center gap-2 group">
              <img src={logoImg} alt="MediFlow" className="h-12 transition-transform duration-300 group-hover:scale-105" />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.path === "/app"
                  ? location.pathname === "/app"
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-700 hover:bg-gray-100/80 hover:translate-x-0.5"
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-transform duration-200 ${!isActive && "group-hover:scale-110"}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-gray-200/60">
            <div className="flex items-center gap-3 mb-3 p-2 rounded-xl hover:bg-gray-50/80 transition-colors cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#14B8A6] to-[#0d9488] flex items-center justify-center text-white shadow-md">
                SM
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-gray-900 truncate">
                  Clinique Saint-Louis
                </div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Plan Pro
                </div>
              </div>
            </div>

            {/* Language Selector */}
            <div className="relative mb-2">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="group flex items-center justify-between gap-2 w-full px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100/80 rounded-xl transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform duration-200" />
                  <span className="font-medium">{language === "fr" ? "Français" : "English"}</span>
                </div>
              </button>
              {showLanguageMenu && (
                <div className="absolute bottom-full left-0 right-0 mb-2 bg-white/95 backdrop-blur-xl border border-gray-200/60 rounded-xl shadow-xl overflow-hidden">
                  <button
                    onClick={() => {
                      setLanguage("fr");
                      setShowLanguageMenu(false);
                    }}
                    className={`w-full px-3 py-2.5 text-sm text-left hover:bg-gray-50/80 transition-colors ${
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
                    className={`w-full px-3 py-2.5 text-sm text-left hover:bg-gray-50/80 transition-colors ${
                      language === "en" ? "bg-blue-50/50 font-semibold text-[#2563EB]" : ""
                    }`}
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>

            <button className="group flex items-center gap-2 w-full px-3 py-2.5 text-sm text-gray-700 hover:bg-red-50/80 hover:text-red-600 rounded-xl transition-all duration-200">
              <LogOut className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              <span className="font-medium">{t("nav.logout")}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-gray-200/60 z-50">
        <div className="flex items-center justify-between h-full px-4">
          <Link to="/app" className="flex items-center gap-2">
            <img src={logoImg} alt="MediFlow" className="h-9" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-16">
          <nav className="px-4 py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.path === "/app"
                  ? location.pathname === "/app"
                  : location.pathname.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-[#2563EB] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:pl-64">
        <main className="pt-16 lg:pt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
