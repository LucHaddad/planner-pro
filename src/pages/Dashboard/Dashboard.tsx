import { useState } from "react";
import type { Task } from "../../types/task";

import "./Dashboard.css";

import Kanban from "./Kanban";
import Calendar from "./Calendar";
import TaskModal from "./TaskModal";

import { tasks as initialTasks } from "./tasks";

function Dashboard() {
  const [tasks, setTasks] =
    useState<Task[]>(initialTasks);

  const [isTaskModalOpen, setIsTaskModalOpen] =
    useState(false);

function handleCreateTask(task: Task) {
  setTasks((currentTasks) => [
    ...currentTasks,
    task,
  ]);

  setIsTaskModalOpen(false);
}

function handleMoveTask(
  taskId: string,
  newStatus: Task["status"]
) {
  setTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === taskId
        ? { ...task, status: newStatus }
        : task
    )
  );
}

  return (
    <section className="dashboard">

      <div className="dashboard-welcome">
        <h1>Olá, Lucas 👋</h1>

        <p>
          Aqui está um resumo das suas atividades.
        </p>
      </div>


      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">✓</span>
            <span className="stat-change positive">
              +12%
            </span>
          </div>

          <div>
            <span className="stat-label">
              Tarefas
            </span>

            <strong className="stat-value">
              {tasks.length}
            </strong>
          </div>

          <span className="stat-description">
            tarefas cadastradas
          </span>
        </div>


        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">▣</span>
            <span className="stat-change positive">
              +8%
            </span>
          </div>

          <div>
            <span className="stat-label">
              Projetos
            </span>

            <strong className="stat-value">
              5
            </strong>
          </div>

          <span className="stat-description">
            projetos ativos
          </span>
        </div>


        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">✓</span>
            <span className="stat-change positive">
              +15%
            </span>
          </div>

          <div>
            <span className="stat-label">
              Concluídas
            </span>

            <strong className="stat-value">
              {
                tasks.filter(
                  (task) =>
                    task.status === "completed"
                ).length
              }
            </strong>
          </div>

          <span className="stat-description">
            tarefas finalizadas
          </span>
        </div>


        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-icon">↗</span>
            <span className="stat-change positive">
              +5%
            </span>
          </div>

          <div>
            <span className="stat-label">
              Progresso
            </span>

            <strong className="stat-value">
              72%
            </strong>
          </div>

          <span className="stat-description">
            progresso geral
          </span>
        </div>

      </div>


      <div className="dashboard-main-grid">

      <Kanban
        tasks={tasks}
        onNewTask={() => setIsTaskModalOpen(true)}
        onMoveTask={handleMoveTask}
      />

        <Calendar />

      </div>


      {isTaskModalOpen && (
        <TaskModal
          onClose={() =>
            setIsTaskModalOpen(false)
          }
          onCreate={handleCreateTask}
        />
      )}

    </section>
  );
}

export default Dashboard;