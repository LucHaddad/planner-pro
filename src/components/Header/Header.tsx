import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-title">
        <h2>Dashboard</h2>
        <p>Bem-vindo de volta!</p>
      </div>

      <div className="header-actions">
        <button className="header-button">🔍</button>
        <button className="header-button">🔔</button>

        <div className="header-user">
          <div className="user-avatar">LR</div>

          <div className="user-info">
            <span>Lucas</span>
            <small>Meu perfil</small>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;