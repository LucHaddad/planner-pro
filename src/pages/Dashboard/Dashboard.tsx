import "./Dashboard.css";
import Kanban from "./Kanban";

function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-welcome">
        <h1>Olá, Lucas 👋</h1>
        <p>Aqui está um resumo das suas atividades.</p>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <span className="stat-label">Tarefas</span>
          <strong className="stat-value">12</strong>
        </div>

        <div className="stat-card">
          <span className="stat-label">Projetos</span>
          <strong className="stat-value">5</strong>
        </div>

        <div className="stat-card">
          <span className="stat-label">Concluídas</span>
          <strong className="stat-value">8</strong>
        </div>

        <div className="stat-card">
          <span className="stat-label">Progresso</span>
          <strong className="stat-value">72%</strong>
        </div>
      </div>

      <Kanban />
    </section>
  );
}

export default Dashboard;