import "./Opciones.css";

function Opciones({ opcionActiva, setOpcionActiva }) {
  const opciones = [
    {
      id: "registro-actividad",
      nombre: "Registro de Actividad",
    },
    {
      id: "formularios-completados",
      nombre: "Formularios Completados",
    },
    {
      id: "cierre-acciones",
      nombre: "Cierre de Acciones",
    },
  ];

  const seleccionarOpcion = (opcion) => {
    setOpcionActiva(opcion.id);
  };

  return (
    <section className="opciones">
      {opciones.map((opcion) => {
        const estaActiva = opcionActiva === opcion.id;

        return (
          <button
            key={opcion.id}
            type="button"
            aria-pressed={estaActiva}
            className={`opcion-boton ${estaActiva ? "opcion-activa" : ""}`}
            onClick={() => seleccionarOpcion(opcion)}
          >
            {opcion.nombre}
          </button>
        );
      })}
    </section>
  );
}

export default Opciones;