import "./AppHeader.css";

function FormularioIcono() {
  return (
    <svg
      className="app-header-svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M8 3.5H14.5L19 8V19.5C19 20.3284 18.3284 21 17.5 21H8C6.89543 21 6 20.1046 6 19V5.5C6 4.39543 6.89543 3.5 8 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 3.5V8H18.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 14H16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M9 17H13.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AppHeader() {
  return (
    <header className="app-header-superior">
      <div className="app-header-marca">
        <div className="app-header-icono">
          <FormularioIcono />
        </div>

        <div className="app-header-texto">
          <h1>App Bos In Action</h1>
          <p>Gestión de formularios y seguimiento</p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;