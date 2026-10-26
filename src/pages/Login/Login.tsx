import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault(); // Impede a página de recarregar

    setIsLoading(true);

    // Simula uma requisição de autenticação de 1.2 segundos
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard"); // Redireciona para o Dashboard
    }, 1200);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900 p-4">
      <div className="flex flex-col gap-6 w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col gap-2 items-center text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Planner Pro
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Entre com suas credenciais para acessar o painel
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Senha" required />

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
      </div>
    </div>
  );
}
