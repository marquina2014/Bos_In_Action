import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  columnasPorFormulario,
  formulariosCompletadosOpciones,
  registrosCompletados,
} from "./registrosCompletados";
import "./FormulariosCompletados.css";

function FormulariosCompletados({ moduloActivo, seccionActual }) {
  const navigate = useNavigate();
  const { formularioUrl } = useParams();

  const formularioSeleccionado = formularioUrl || "";

  const estatusPorSeccion =
    seccionActual?.id === "cierre-acciones" ? "En proceso" : "Finalizado";

  const tituloPantalla =
    seccionActual?.id === "cierre-acciones"
      ? "Cierre de Acciones"
      : "Formularios Completados";

  const descripcionPantalla =
    seccionActual?.id === "cierre-acciones"
      ? `Listado de formularios con acciones en proceso para la Gerencia ${moduloActivo.nombre}.`
      : `Listado de registros finalizados para la Gerencia ${moduloActivo.nombre}.`;

  const columnas = columnasPorFormulario[formularioSeleccionado] || [];

  const registros = useMemo(() => {
    if (!formularioSeleccionado) return [];

    const registrosFormulario = registrosCompletados[formularioSeleccionado] || [];

    return registrosFormulario
      .filter((registro) => registro.gerencia === moduloActivo.nombre)
      .map((registro) => ({
        ...registro,
        estatus: estatusPorSeccion,
      }));
  }, [formularioSeleccionado, moduloActivo.nombre, estatusPorSeccion]);

  const cambiarFormulario = (event) => {
    const nuevoFormulario = event.target.value;

    if (!nuevoFormulario) {
      navigate(`/${moduloActivo.nombre}/${seccionActual.url}`);
      return;
    }

    navigate(`/${moduloActivo.nombre}/${seccionActual.url}/${nuevoFormulario}`);
  };

  const renderizarValor = (registro, campo) => {
    const valor = registro[campo];

    if (campo === "estatus") {
      return (
        <span
          className={
            valor === "Finalizado" ? "badge-completado" : "badge-en-proceso"
          }
        >
          {valor}
        </span>
      );
    }

    if (campo === "fotografia") {
      return (
        <span className="archivo-fotografia">
          <span>📷</span>
          {valor}
        </span>
      );
    }

    if (campo === "documentoAdjunto") {
      return (
        <span className="archivo-fotografia">
          <span>📎</span>
          {valor}
        </span>
      );
    }

    return valor || "-";
  };

  return (
    <section className="formularios-completados">
      <header className="formularios-completados-header">
        <div>
          <div className="formularios-completados-titulo">
            <span className="formularios-completados-icono">📄</span>
            <h1>{tituloPantalla}</h1>
          </div>

          <p>{descripcionPantalla}</p>
        </div>

        <div className="selector-formulario-completado">
          <label>Formulario Elegido</label>

          <select value={formularioSeleccionado} onChange={cambiarFormulario}>
            <option value="">Buscar</option>

            {formulariosCompletadosOpciones.map((formulario) => (
              <option key={formulario.id} value={formulario.id}>
                {formulario.nombre}
              </option>
            ))}
          </select>
        </div>
      </header>

      <div className="formularios-completados-card">
        <div className="formularios-completados-card-header">
          <div>
            <h2>Listado de registros</h2>
            <p>
              Selecciona un formulario para revisar sus registros de ejemplo.
            </p>
          </div>
        </div>

        <div className="tabla-registros-contenedor">
          <table className="tabla-registros">
            <thead>
              <tr>
                <th>ID</th>

                {columnas.map((columna) => (
                  <th key={columna.campo}>{columna.titulo}</th>
                ))}

                <th>Ver</th>
              </tr>
            </thead>

            <tbody>
              {!formularioSeleccionado && (
                <tr>
                  <td
                    colSpan="10"
                    className="sin-registros-completados"
                  >
                    Selecciona un formulario para visualizar sus registros.
                  </td>
                </tr>
              )}

              {formularioSeleccionado && registros.length === 0 && (
                <tr>
                  <td
                    colSpan="10"
                    className="sin-registros-completados"
                  >
                    No hay registros para este formulario en la gerencia
                    seleccionada.
                  </td>
                </tr>
              )}

              {registros.map((registro) => (
                <tr key={registro.id}>
                  <td>{registro.id}</td>

                  {columnas.map((columna) => (
                    <td key={columna.campo}>
                      {renderizarValor(registro, columna.campo)}
                    </td>
                  ))}

                  <td>
                    <button type="button" className="boton-ver-registro">
                      👁
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default FormulariosCompletados;