import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { LogOut, Bell, Search } from "lucide-react";
import type { UserRole } from "@/types/user";
import "./Header.css";

// Mapeia o papel técnico para rótulo legível e cor correspondente
const ROLE_CONFIG: Record<UserRole, { label: string; variant: BadgeVariant }> = {
  SUPERVISOR: { label: "Supervisor", variant: "primary" },
  EMPLOYEE: { label: "Colaborador", variant: "success" },
  ADMINISTRATOR: { label: "Administrador", variant: "purple" },
};

function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const roleInfo = user?.role
    ? ROLE_CONFIG[user.role]
    : { label: "Usuário", variant: "default" as BadgeVariant };

  const initials = user?.name ? getInitials(user.name) : "US";

  return (
    <header className="header">
      <div className="header-title">
        <h2>Planner Pro</h2>
        <p>Sistema de Gestão de Escalas e Tarefas</p>
      </div>

      <div className="header-actions">
        <button type="button" className="header-button" title="Buscar">
          <Search className="w-4 h-4" />
        </button>

        <button type="button" className="header-button" title="Notificações">
          <Bell className="w-4 h-4" />
        </button>

        <div className="header-user">
          <div className="user-avatar">{initials}</div>

          <div className="user-info">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm text-slate-800 dark:text-white">
                {user?.name || "Usuário"}
              </span>
              <Badge variant={roleInfo.variant}>{roleInfo.label}</Badge>
            </div>
            <small className="text-xs text-slate-500">{user?.email}</small>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="ml-3 p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-xl transition-colors cursor-pointer"
            title="Sair da conta"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;