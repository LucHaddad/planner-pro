import type { Task } from "../types/task";

const TASKS_STORAGE_KEY = "planner-pro-tasks";

export function getTasks(): Task[] | null {
  const storedTasks = localStorage.getItem(
    TASKS_STORAGE_KEY
  );

  if (!storedTasks) {
    return null;
  }

  try {
    return JSON.parse(storedTasks) as Task[];
  } catch {
    return null;
  }
}

export function saveTasks(tasks: Task[]) {
  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify(tasks)
  );
}