import { useState } from "react";
import type { Task, TaskPriority } from "../../types/task";
import "./TaskModal.css";

interface TaskModalProps {
  onClose: () => void;
  onCreate: (task: Task) => void;
  taskToEdit?: Task;
  onEdit?: (task: Task) => void;
}

function TaskModal({
  onClose,
  onCreate,
  taskToEdit,
  onEdit,
}: TaskModalProps) {
  const isEditing = Boolean(taskToEdit);

  const [title, setTitle] = useState(
    taskToEdit?.title ?? ""
  );

  const [description, setDescription] = useState(
    taskToEdit?.description ?? ""
  );

  const [priority, setPriority] =
    useState<TaskPriority>(
      taskToEdit?.priority ?? "medium"
    );

  const [dueDate, setDueDate] = useState(
    taskToEdit?.dueDate ?? ""
  );

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    if (isEditing && taskToEdit && onEdit) {
      const updatedTask: Task = {
        ...taskToEdit,
        title: title.trim(),
        description: description.trim(),
        priority,
        dueDate,
      };

      onEdit(updatedTask);
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      status: "todo",
      priority,
      dueDate,
      createdAt: new Date().toISOString(),
    };

    onCreate(newTask);
  }

  return (
    <div className="modal-overlay">
      <div className="task-modal">

        <div className="task-modal-header">
          <div>
            <h2>
              {isEditing
                ? "Editar tarefa"
                : "Nova tarefa"}
            </h2>

            <p>
              {isEditing
                ? "Atualize as informações da tarefa."
                : "Adicione uma nova atividade ao seu planner."}
            </p>
          </div>

          <button
            className="modal-close"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="title">
              Título
            </label>

            <input
              id="title"
              type="text"
              placeholder="Ex: Criar apresentação"
              value={title}
              onChange={(event) =>
                setTitle(event.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Descrição
            </label>

            <textarea
              id="description"
              placeholder="Descreva a tarefa..."
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
            />
          </div>

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="priority">
                Prioridade
              </label>

              <select
                id="priority"
                value={priority}
                onChange={(event) =>
                  setPriority(
                    event.target.value as TaskPriority
                  )
                }
              >
                <option value="low">
                  Baixa
                </option>

                <option value="medium">
                  Média
                </option>

                <option value="high">
                  Alta
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dueDate">
                Data de vencimento
              </label>

              <input
                id="dueDate"
                type="date"
                value={dueDate}
                onChange={(event) =>
                  setDueDate(event.target.value)
                }
              />
            </div>

          </div>

          <div className="task-modal-actions">

            <button
              type="button"
              className="button-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="button-primary"
            >
              {isEditing
                ? "Salvar alterações"
                : "Criar tarefa"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default TaskModal;