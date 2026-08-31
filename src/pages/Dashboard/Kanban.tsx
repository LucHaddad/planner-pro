import "./Kanban.css";
import { tasks } from "./tasks";
import type { TaskStatus } from "../../types/task";

const columns: {
  id: TaskStatus;
  title: string;
}[] = [
  {
    id: "backlog",
    title: "Backlog",
  },
  {
    id: "todo",
    title: "A fazer",
  },
  {
    id: "in-progress",
    title: "Em andamento",
  },
  {
    id: "completed",
    title: "Concluído",
  },
];

function Kanban() {
  return (
    <section className="kanban">
      <div className="kanban-header">
        <div>
          <h2>Minhas tarefas</h2>

          <p>
            Acompanhe o andamento das suas atividades.
          </p>
        </div>

        <button className="kanban-add-button">
          + Nova tarefa
        </button>
      </div>

      <div className="kanban-board">

        {columns.map((column) => {

          const columnTasks = tasks.filter(
            (task) => task.status === column.id
          );

          return (
            <div
              className="kanban-column"
              key={column.id}
            >

              <div className="kanban-column-header">

                <h3>
                  {column.title}
                </h3>

                <span>
                  {columnTasks.length}
                </span>

              </div>

              {columnTasks.map((task) => (

                <div
                  className="task-card"
                  key={task.id}
                >

                  <span
                    className={`task-priority ${task.priority}`}
                  >
                    {task.priority === "high" && "Alta"}

                    {task.priority === "medium" && "Média"}

                    {task.priority === "low" && "Baixa"}
                  </span>

                  <h4>
                    {task.title}
                  </h4>

                  <p>
                    {task.description}
                  </p>

                </div>

              ))}

            </div>
          );
        })}

      </div>
    </section>
  );
}

export default Kanban;