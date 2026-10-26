import { useState } from "react";
import "./Calendar.css";
import type { Task } from "../../types/task";

interface CalendarProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
}

function Calendar({
  tasks,
  onEditTask,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 7, 1)
  );

  const weekDays = [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb",
    "Dom",
  ];

  const monthName = currentDate.toLocaleDateString(
    "pt-BR",
    {
      month: "long",
      year: "numeric",
    }
  );

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(
    year,
    month,
    1
  );

  const lastDayOfMonth = new Date(
    year,
    month + 1,
    0
  );

  // JavaScript começa domingo = 0.
  // Queremos segunda = 0.
  const firstWeekDay =
    (firstDayOfMonth.getDay() + 6) % 7;

  const daysInMonth =
    lastDayOfMonth.getDate();

  const days = [];

  // Dias do mês anterior
  const previousMonthLastDay = new Date(
    year,
    month,
    0
  ).getDate();

  for (
    let i = firstWeekDay - 1;
    i >= 0;
    i--
  ) {
    days.push({
      day: previousMonthLastDay - i,
      currentMonth: false,
    });
  }

  // Dias do mês atual
  for (
    let day = 1;
    day <= daysInMonth;
    day++
  ) {
    days.push({
      day,
      currentMonth: true,
    });
  }

  // Dias do próximo mês
  let nextDay = 1;

  while (days.length % 7 !== 0) {
    days.push({
      day: nextDay,
      currentMonth: false,
    });

    nextDay++;
  }

  function goToPreviousMonth() {
    setCurrentDate(
      new Date(year, month - 1, 1)
    );
  }

  function goToNextMonth() {
    setCurrentDate(
      new Date(year, month + 1, 1)
    );
  }

  function getTasksForDay(
    day: number
  ) {
    return tasks.filter((task) => {
      if (!task.dueDate) {
        return false;
      }

      const [taskYear, taskMonth, taskDay] =
        task.dueDate.split("-").map(Number);

      return (
        taskYear === year &&
        taskMonth === month + 1 &&
        taskDay === day
      );
    });
  }

  return (
    <section className="calendar">

      <div className="calendar-header">
        <div>
          <h2>Calendário</h2>

          <p>
            Suas tarefas e compromissos.
          </p>
        </div>

        <button className="calendar-add-button">
          + Evento
        </button>
      </div>

      <div className="calendar-content">

        <div className="calendar-month">

          <button
            type="button"
            onClick={goToPreviousMonth}
          >
            ‹
          </button>

          <h3>
            {monthName.charAt(0).toUpperCase() +
              monthName.slice(1)}
          </h3>

          <button
            type="button"
            onClick={goToNextMonth}
          >
            ›
          </button>

        </div>

        <div className="calendar-weekdays">
          {weekDays.map((day) => (
            <span key={day}>
              {day}
            </span>
          ))}
        </div>

        <div className="calendar-days">

          {days.map((calendarDay, index) => {

            const dayTasks =
              calendarDay.currentMonth
                ? getTasksForDay(
                    calendarDay.day
                  )
                : [];

            const isToday =
              calendarDay.currentMonth &&
              calendarDay.day ===
                new Date().getDate() &&
              month ===
                new Date().getMonth() &&
              year ===
                new Date().getFullYear();

            return (
              <div
                key={`${calendarDay.day}-${index}`}
                className={`calendar-day ${
                  !calendarDay.currentMonth
                    ? "other-month"
                    : ""
                } ${
                  isToday
                    ? "today"
                    : ""
                }`}
              >

                <span>
                  {calendarDay.day}
                </span>

                {dayTasks.length > 0 && (
                  <div className="calendar-task-indicator">

                    {dayTasks
                      .slice(0, 2)
                      .map((task) => (
                        <button
                          key={task.id}
                          type="button"
                          className="calendar-task"
                          onClick={() =>
                            onEditTask(task)
                          }
                        >
                          {task.title}
                        </button>
                      ))}

                    {dayTasks.length > 2 && (
                      <small>
                        +{dayTasks.length - 2} tarefas
                      </small>
                    )}

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Calendar;