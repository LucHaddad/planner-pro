import "./Kanban.css";

function Kanban() {
  return (
    <section className="kanban">
      <div className="kanban-header">
        <div>
          <h2>Minhas tarefas</h2>
          <p>Acompanhe o andamento das suas atividades.</p>
        </div>

        <button className="kanban-add-button">
          + Nova tarefa
        </button>
      </div>

      <div className="kanban-board">

        <div className="kanban-column">
          <div className="kanban-column-header">
            <h3>Backlog</h3>
            <span>2</span>
          </div>

          <div className="task-card">
            <span className="task-priority high">
              Alta
            </span>

            <h4>Definir estrutura do projeto</h4>

            <p>
              Organizar os componentes principais.
            </p>
          </div>

          <div className="task-card">
            <span className="task-priority medium">
              Média
            </span>

            <h4>Pesquisar referências</h4>

            <p>
              Analisar ideias para o Dashboard.
            </p>
          </div>
        </div>


        <div className="kanban-column">
          <div className="kanban-column-header">
            <h3>A fazer</h3>
            <span>2</span>
          </div>

          <div className="task-card">
            <span className="task-priority high">
              Alta
            </span>

            <h4>Criar autenticação</h4>

            <p>
              Implementar Login e Cadastro.
            </p>
          </div>

          <div className="task-card">
            <span className="task-priority low">
              Baixa
            </span>

            <h4>Definir cores</h4>

            <p>
              Criar identidade visual.
            </p>
          </div>
        </div>


        <div className="kanban-column">
          <div className="kanban-column-header">
            <h3>Em andamento</h3>
            <span>1</span>
          </div>

          <div className="task-card">
            <span className="task-priority high">
              Alta
            </span>

            <h4>Dashboard</h4>

            <p>
              Construir interface principal.
            </p>
          </div>
        </div>


        <div className="kanban-column">
          <div className="kanban-column-header">
            <h3>Concluído</h3>
            <span>2</span>
          </div>

          <div className="task-card">
            <span className="task-priority low">
              Baixa
            </span>

            <h4>Configurar Vite</h4>

            <p>
              Criar projeto React + TypeScript.
            </p>
          </div>

          <div className="task-card">
            <span className="task-priority medium">
              Média
            </span>

            <h4>Criar Sidebar</h4>

            <p>
              Implementar navegação lateral.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Kanban;