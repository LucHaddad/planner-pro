import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import { Login } from "./pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Rota pública de Login */}
          <Route path="/login" element={<Login />} />

          {/* Rota protegida do Dashboard (somente usuários autenticados) */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Ao acessar a raiz "/", redireciona para o login por padrão */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Qualquer rota desconhecida redireciona para o login */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;