import { useLocation, useNavigate } from "react-router-dom";
import "./Menu.css";

function UserGearIcon() {
  return (
    <svg
      className="menu-svg-icon"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M10 11.5C12.2091 11.5 14 9.70914 14 7.5C14 5.29086 12.2091 3.5 10 3.5C7.79086 3.5 6 5.29086 6 7.5C6 9.70914 7.79086 11.5 10 11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M3.5 20C4.2 16.8 6.6 15 10 15C11.2 15 12.3 15.25 13.2 15.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M18 14.5V13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M18 22V20.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M14.75 16.25L13.45 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M22.55 20.5L21.25 19.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M14.75 19.75L13.45 20.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M22.55 15.5L21.25 16.25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <circle
        cx="18"
        cy="17.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  const opcionesMenu = [
    {
      id: "home",
      nombre: "Inicio",
      titulo: "Home",
      icono: "⌂",
      tipo: "home",
      ruta: "/Home",
    },
    {
      id: "gmesm",
      nombre: "GMESM",
      titulo: "Módulo GMESM",
      icono: "📌",
      tipo: "app",
      ruta: "/GMESM/Registro_Actividad",
    },
    {
      id: "gmem",
      nombre: "GMEM",
      titulo: "Módulo GMEM",
      icono: "📌",
      tipo: "app",
      ruta: "/GMEM/Registro_Actividad",
    },
    {
      id: "gpm",
      nombre: "GPM",
      titulo: "Módulo GPM",
      icono: "📌",
      tipo: "app",
      ruta: "/GPM/Registro_Actividad",
    },
    {
      id: "gpmda",
      nombre: "GPMDA",
      titulo: "Módulo GPMDA",
      icono: "📌",
      tipo: "app",
      ruta: "/GPMDA/Registro_Actividad",
    },
    {
      id: "gestion-usuario",
      nombre: "Gestión de usuario",
      titulo: "Gestión de Usuario",
      icono: <UserGearIcon />,
      tipo: "gestion-usuario",
      ruta: "/Gestion_Usuario",
    },
  ];

  const obtenerOpcionActiva = () => {
    const rutaActual = location.pathname.toLowerCase();

    if (rutaActual.startsWith("/gmesm")) return "gmesm";
    if (rutaActual.startsWith("/gmem")) return "gmem";
    if (rutaActual.startsWith("/gpmda")) return "gpmda";
    if (rutaActual.startsWith("/gpm")) return "gpm";
    if (rutaActual.startsWith("/gestion_usuario")) return "gestion-usuario";

    return "home";
  };

  const opcionActiva = obtenerOpcionActiva();

  const seleccionarOpcion = (opcion) => {
    if (opcion.ruta) {
      navigate(opcion.ruta);
    }
  };

  return (
    <aside className="menu-lateral">
      <div className="logo-bhp">BHP</div>

      <nav className="menu-opciones">
        {opcionesMenu.map((opcion) => (
          <button
            key={opcion.id}
            type="button"
            className={`menu-boton ${
              opcionActiva === opcion.id ? "seleccionado" : ""
            }`}
            onClick={() => seleccionarOpcion(opcion)}
          >
            <span className="menu-icono">{opcion.icono}</span>
            <span>{opcion.nombre}</span>
          </button>
        ))}
      </nav>

      <div className="usuario">
        <div className="avatar"></div>
        <p>Luis Marquina</p>
        <strong>Admin</strong>
      </div>
    </aside>
  );
}

export default Menu;