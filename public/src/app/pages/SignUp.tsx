import { Link, useNavigate } from "react-router";
import { Calendar, Mail, Lock, User, Building } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/MediFlow_logo_.png";

export function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    clinicName: "",
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2563EB] via-[#1d4ed8] to-[#14B8A6] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img src={logoImg} alt="MediFlow" className="h-14" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Créer votre compte
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Essai gratuit 14 jours, sans carte bancaire
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="clinicName" className="block text-sm font-medium text-gray-700 mb-2">
                Nom de la clinique
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="clinicName"
                  type="text"
                  value={formData.clinicName}
                  onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-gray-50/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent focus:bg-white transition-all duration-200"
                  placeholder="Clinique Saint-Louis"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Votre nom
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-gray-50/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent focus:bg-white transition-all duration-200"
                  placeholder="Dr. Marie Martin"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email professionnel
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-gray-50/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent focus:bg-white transition-all duration-200"
                  placeholder="votre@email.fr"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-gray-50/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent focus:bg-white transition-all duration-200"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 mt-1 text-[#2563EB] border-gray-300 rounded focus:ring-[#2563EB]"
                required
              />
              <span className="text-sm text-gray-600">
                J'accepte les{" "}
                <a href="#" className="text-[#2563EB] hover:text-[#1d4ed8]">
                  conditions d'utilisation
                </a>{" "}
                et la{" "}
                <a href="#" className="text-[#2563EB] hover:text-[#1d4ed8]">
                  politique de confidentialité
                </a>
              </span>
            </div>

            <button
              type="submit"
              className="group w-full py-3 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 font-semibold"
            >
              Créer mon compte
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Déjà un compte ?{" "}
              <Link
                to="/login"
                className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors font-medium"
              >
                Se connecter
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white backdrop-blur-sm bg-white/10 px-4 py-2 rounded-xl transition-all duration-200 hover:bg-white/20 font-medium">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
