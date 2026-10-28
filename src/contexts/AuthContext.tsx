import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { User, LoginCredentials } from "@/types/user";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
}

const STORAGE_KEY = "planner-pro-user";

// Usuários de teste para simular os 3 perfis de acesso do projeto
const MOCK_USERS: Record<string, User> = {
  "supervisor@empresa.com": {
    id: "usr-1",
    name: "Lucas Haddad",
    email: "supervisor@empresa.com",
    role: "SUPERVISOR",
  },
  "colaborador@empresa.com": {
    id: "usr-2",
    name: "Ana Silva",
    email: "colaborador@empresa.com",
    role: "EMPLOYEE",
  },
  "admin@empresa.com": {
    id: "usr-3",
    name: "Carlos Admin",
    email: "admin@empresa.com",
    role: "ADMINISTRATOR",
  },
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Ao iniciar a aplicação, verifica se já existe uma sessão salva no navegador
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Erro ao carregar sessão do localStorage:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  async function login({ email, password }: LoginCredentials) {
    setIsLoading(true);

    // Simula uma requisição assíncrona de autenticação
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Validação básica de credenciais (simulando autenticação)
    const normalizedEmail = email.toLowerCase().trim();
    const foundUser = MOCK_USERS[normalizedEmail];

    if (!foundUser || password.length < 4) {
      setIsLoading(false);
      throw new Error("E-mail ou senha incorretos.");
    }

    setUser(foundUser);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(foundUser));
    setIsLoading(false);
  }

  function logout() {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para consumir o contexto com segurança
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser utilizado dentro de um <AuthProvider>");
  }

  return context;
}