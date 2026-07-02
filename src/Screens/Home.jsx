import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const metricas = [
    {
      id: 1,
      titulo: "Formularios creados",
      valor: "24",
      detalle: "Registros del mes",
      icono: "📋",
      clase: "verde",
    },
    {
      id: 2,
      titulo: "Acciones en proceso",
      valor: "8",
      detalle: "Pendientes de cierre",
      icono: "⏱",
      clase: "amarillo",
    },
    {
      id: 3,
      titulo: "Formularios finalizados",
      valor: "16",
      detalle: "Completados",
      icono: "✅",
      clase: "azul",
    },
    {
      id: 4,
      titulo: "Usuarios activos",
      valor: "4",
      detalle: "Con acceso vigente",
      icono: "👥",
      clase: "morado",
    },
  ];

  const reportesRecientes = [
    {
      id: 1,
      titulo: "Registro MOP completado",
      gerencia: "GMESM",
      detalle: "Palas y Perforadoras",
      tiempo: "Hace 2 horas",
      estado: "Finalizado",
      tipo: "MOP",
    },
    {
      id: 2,
      titulo: "Inicio Trabajo Seguro cargado",
      gerencia: "GMEM",
      detalle: "Camiones",
      tiempo: "Hace 5 horas",
      estado: "Finalizado",
      tipo: "ITS",
    },
    {
      id: 3,
      titulo: "Acción pendiente de cierre",
      gerencia: "GPM",
      detalle: "Producción Mina",
      tiempo: "Hace 1 día",
      estado: "En proceso",
      tipo: "Acción",
    },
    {
      id: 4,
      titulo: "Registro 5S realizado",
      gerencia: "GPMDA",
      detalle: "Maquinaria",
      tiempo: "Hace 2 días",
      estado: "Finalizado",
      tipo: "5S",
    },
  ];

  const gerencias = [
    {
      nombre: "GMESM",
      descripcion: "Palas y Perforadoras",
      ruta: "/GMESM/Registro_Actividad",
    },
    {
      nombre: "GMEM",
      descripcion: "Camiones y EEAA",
      ruta: "/GMEM/Registro_Actividad",
    },
    {
      nombre: "GPM",
      descripcion: "Producción Mina y Autonomía",
      ruta: "/GPM/Registro_Actividad",
    },
    {
      nombre: "GPMDA",
      descripcion: "Maquinaria, Desarrollo y Automatización",
      ruta: "/GPMDA/Registro_Actividad",
    },
  ];

  return (
    <section className="home">
      <header className="home-header">
        <div>
          <h1>Bienvenido a Bos In Action</h1>
          <p>
            Plataforma para registrar actividades, revisar formularios
            completados y gestionar el cierre de acciones por gerencia.
          </p>
        </div>

        <button
          type="button"
          className="home-boton-principal"
          onClick={() => navigate("/GMESM/Registro_Actividad")}
        >
          Crear nuevo registro
        </button>
      </header>

      <div className="home-metricas">
        {metricas.map((metrica) => (
          <article key={metrica.id} className="home-metrica-card">
            <div className={`home-metrica-icono ${metrica.clase}`}>
              {metrica.icono}
            </div>

            <div>
              <p>{metrica.titulo}</p>
              <h2>{metrica.valor}</h2>
              <span>{metrica.detalle}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="home-grid">
        <article className="home-panel home-panel-gerencias">
          <div className="home-panel-header">
            <div>
              <h2>Accesos rápidos por gerencia</h2>
              <p>Selecciona una gerencia para iniciar un nuevo registro.</p>
            </div>
          </div>

          <div className="home-gerencias">
            {gerencias.map((gerencia) => (
              <button
                key={gerencia.nombre}
                type="button"
                className="home-gerencia-card"
                onClick={() => navigate(gerencia.ruta)}
              >
                <span>📌</span>
                <div>
                  <h3>{gerencia.nombre}</h3>
                  <p>{gerencia.descripcion}</p>
                </div>
              </button>
            ))}
          </div>
        </article>

        <article className="home-panel">
          <div className="home-panel-header">
            <div>
              <h2>Reportes recientes</h2>
              <p>Últimos movimientos registrados en la aplicación.</p>
            </div>
          </div>

          <div className="home-reportes">
            {reportesRecientes.map((reporte) => (
              <div key={reporte.id} className="home-reporte-item">
                <div className="home-reporte-icono">📄</div>

                <div className="home-reporte-info">
                  <h3>{reporte.titulo}</h3>
                  <p>
                    {reporte.gerencia} · {reporte.detalle}
                  </p>
                  <span>{reporte.tiempo}</span>
                </div>

                <div className="home-reporte-derecha">
                  <span
                    className={
                      reporte.estado === "Finalizado"
                        ? "home-badge-finalizado"
                        : "home-badge-proceso"
                    }
                  >
                    {reporte.estado}
                  </span>

                  <small>{reporte.tipo}</small>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>

      <article className="home-panel home-estado">
        <div className="home-panel-header">
          <div>
            <h2>Estado general de formularios</h2>
            <p>Resumen visual de avance de formularios y acciones.</p>
          </div>
        </div>

        <div className="home-barra">
          <div className="home-barra-finalizados"></div>
          <div className="home-barra-proceso"></div>
          <div className="home-barra-pendientes"></div>
          <div className="home-barra-revision"></div>
        </div>

        <div className="home-leyenda">
          <div>
            <span className="punto verde"></span>
            Finalizados 50%
          </div>

          <div>
            <span className="punto amarillo"></span>
            En proceso 25%
          </div>

          <div>
            <span className="punto azul"></span>
            Pendientes 15%
          </div>

          <div>
            <span className="punto morado"></span>
            En revisión 10%
          </div>
        </div>
      </article>
    </section>
  );
}

export default Home;