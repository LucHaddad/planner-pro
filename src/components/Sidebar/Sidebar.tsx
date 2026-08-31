import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h1>Planner Pro</h1>
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li>Dashboard</li>
          <li>Calendário</li>
          <li>Tarefas</li>
          <li>Projetos</li>
          <li>Metas</li>
          <li>Estatísticas</li>
          <li>Configurações</li>
        </ul>
      </nav>

      <div className="sidebar-profile">
        <span className="profile-icon">👤</span>
        <span>Meu Perfil</span>
      </div>
    </aside>
  );
}

export default Sidebar;