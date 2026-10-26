import "./Kanban.css";
import type { Task, TaskStatus } from "../../types/task";

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

interface KanbanProps {
  tasks: Task[];
  onNewTask: () => void;
  onMoveTask: (taskId: string, newStatus: TaskStatus) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
}

function Kanban({
  tasks,
  onNewTask,
  onMoveTask,
  onEditTask,
  onDeleteTask,
}: KanbanProps) {
  
  function handleDragStart(
    event: React.DragEvent<HTMLDivElement>,
    taskId: string
  ) {
    event.dataTransfer.setData("taskId", taskId);
  }

  function handleDragOver(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>,
    newStatus: TaskStatus
  ) {
    event.preventDefault();

    const taskId = event.dataTransfer.getData("taskId");

    if (!taskId) {
      return;
    }

    onMoveTask(taskId, newStatus);
  }

  return (
    <section className="kanban">
      <div className="kanban-header">
        <div>
          <h2>Minhas tarefas</h2>

          <p>
            Acompanhe o andamento das suas atividades.
          </p>
        </div>

        <button
          className="kanban-add-button"
          onClick={onNewTask}
        >
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
              onDragOver={handleDragOver}
              onDrop={(event) =>
                handleDrop(event, column.id)
              }
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
                  draggable
                  onDragStart={(event) =>
                    handleDragStart(event, task.id)
                  }
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

                  {task.dueDate && (
                    <div className="task-due-date">
                      📅 {task.dueDate}
                   </div>
                  )}

                  <div className="task-card-actions">

                  <button
                    type="button"
                    onClick={() => onEditTask(task)}
                  >
                    ✏️ Editar
                  </button>

                  <button
                    type="button"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    🗑️ Excluir
                  </button>

                </div>

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