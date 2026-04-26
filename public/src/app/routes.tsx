import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Dashboard } from "./pages/Dashboard";
import { Appointments } from "./pages/Appointments";
import { Patients } from "./pages/Patients";
import { PatientDetail } from "./pages/PatientDetail";
import { Notifications } from "./pages/Notifications";
import { AIModule } from "./pages/AIModule";
import { Settings } from "./pages/Settings";
import { AppLayout } from "./components/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/app",
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },
      { path: "appointments", Component: Appointments },
      { path: "patients", Component: Patients },
      { path: "patients/:id", Component: PatientDetail },
      { path: "notifications", Component: Notifications },
      { path: "ai", Component: AIModule },
      { path: "settings", Component: Settings },
    ],
  },
]);
