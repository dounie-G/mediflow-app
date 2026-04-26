import { Link } from "react-router";
import { Calendar, Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";
import logoImg from "../../imports/MediFlow_logo_.png";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

          {!submitted ? (
            <>
              <h1 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Mot de passe oublié ?
              </h1>
              <p className="text-gray-600 text-center mb-8">
                Entrez votre email pour réinitialiser votre mot de passe
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-200 bg-gray-50/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent focus:bg-white transition-all duration-200"
                      placeholder="votre@email.fr"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="group w-full py-3 bg-gradient-to-r from-[#2563EB] to-[#1d4ed8] text-white rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 font-semibold"
                >
                  Envoyer le lien de réinitialisation
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Email envoyé !</h2>
              <p className="text-gray-600 mb-6">
                Un lien de réinitialisation a été envoyé à{" "}
                <span className="font-medium text-gray-900">{email}</span>
              </p>
              <p className="text-sm text-gray-500">
                Vous n'avez pas reçu l'email ? Vérifiez vos spams ou{" "}
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors font-medium"
                >
                  réessayez
                </button>
              </p>
            </div>
          )}

          <div className="mt-6">
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la connexion
            </Link>
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
