import type { Task } from "../../types/task";

export const tasks: Task[] = [
  {
    id: "1",
    title: "Definir estrutura do projeto",
    description: "Organizar os componentes principais.",
    status: "backlog",
    priority: "high",
    dueDate: "2026-09-01",
    createdAt: "2026-08-31",
  },

  {
    id: "2",
    title: "Pesquisar referências",
    description: "Analisar ideias para o Dashboard.",
    status: "backlog",
    priority: "medium",
    dueDate: "2026-09-02",
    createdAt: "2026-08-31",
  },

  {
    id: "3",
    title: "Criar autenticação",
    description: "Implementar Login e Cadastro.",
    status: "todo",
    priority: "high",
    dueDate: "2026-09-03",
    createdAt: "2026-08-31",
  },

  {
    id: "4",
    title: "Definir cores",
    description: "Criar identidade visual.",
    status: "todo",
    priority: "low",
    dueDate: "2026-09-04",
    createdAt: "2026-08-31",
  },

  {
    id: "5",
    title: "Dashboard",
    description: "Construir interface principal.",
    status: "in-progress",
    priority: "high",
    dueDate: "2026-09-05",
    createdAt: "2026-08-31",
  },

  {
    id: "6",
    title: "Configurar Vite",
    description: "Criar projeto React + TypeScript.",
    status: "completed",
    priority: "low",
    dueDate: "2026-08-30",
    createdAt: "2026-08-30",
  },

  {
    id: "7",
    title: "Criar Sidebar",
    description: "Implementar navegação lateral.",
    status: "completed",
    priority: "medium",
    dueDate: "2026-08-30",
    createdAt: "2026-08-30",
  },
];