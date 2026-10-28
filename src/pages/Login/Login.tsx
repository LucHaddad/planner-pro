import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/contexts/AuthContext";
import { Lock, Mail, AlertCircle } from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      await login({ email, password });
      navigate("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Ocorreu um erro ao tentar entrar.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900 p-4">
      <div className="flex flex-col gap-6 w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Planner Pro
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Entre com suas credenciais para acessar a gestão de escalas
          </p>
        </div>

        {errorMessage && (
          <div className="flex items-center gap-2.5 p-3.5 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 rounded-xl text-sm text-red-700 dark:text-red-400">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="E-mail"
            type="email"
            placeholder="seu@empresa.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<Mail className="w-4 h-4" />}
            required
          />

          <Input
            label="Senha"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={<Lock className="w-4 h-4" />}
            required
          />

          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isLoading}
            className="w-full mt-2"
          >
            Entrar
          </Button>
        </form>

        {/* Dica para testes dos diferentes perfis */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-500 space-y-1.5">
          <p className="font-semibold text-slate-700 dark:text-slate-300">
            Contas de demonstração para teste:
          </p>
          <div className="grid grid-cols-1 gap-1 font-mono text-[11px]">
            <span
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => {
                setEmail("supervisor@empresa.com");
                setPassword("1234");
              }}
            >
              • <strong>Supervisor:</strong> supervisor@empresa.com
            </span>
            <span
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => {
                setEmail("colaborador@empresa.com");
                setPassword("1234");
              }}
            >
              • <strong>Funcionário:</strong> colaborador@empresa.com
            </span>
            <span
              className="cursor-pointer hover:text-blue-600 transition-colors"
              onClick={() => {
                setEmail("admin@empresa.com");
                setPassword("1234");
              }}
            >
              • <strong>Admin:</strong> admin@empresa.com
            </span>
          </div>
          <p className="text-[10px] text-slate-400">Senha: qualquer senha com 4+ dígitos (clique acima para preencher)</p>
        </div>
      </div>
    </div>
  );
}