import "./Calendar.css";

function Calendar() {
  const weekDays = [
    "Seg",
    "Ter",
    "Qua",
    "Qui",
    "Sex",
    "Sáb",
    "Dom",
  ];

  const days = [
    27, 28, 29, 30, 31,
    1, 2,
    3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16,
    17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30,
    31,
  ];

  return (
    <section className="calendar">
      <div className="calendar-header">
        <div>
          <h2>Calendário</h2>
          <p>Seus próximos compromissos.</p>
        </div>

        <button className="calendar-add-button">
          + Evento
        </button>
      </div>

      <div className="calendar-content">

        <div className="calendar-month">
          <button>‹</button>

          <h3>Agosto 2026</h3>

          <button>›</button>
        </div>

        <div className="calendar-weekdays">
          {weekDays.map((day) => (
            <span key={day}>{day}</span>
          ))}
        </div>

        <div className="calendar-days">
          {days.map((day, index) => (
            <div
              key={`${day}-${index}`}
              className={
                day === 31 && index === 37
                  ? "calendar-day today"
                  : "calendar-day"
              }
            >
              <span>{day}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Calendar;