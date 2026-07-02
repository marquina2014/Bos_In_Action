import { useEffect, useState } from "react";
import { obtenerSuperintendenciasPorGerencia } from "../../Data/superintendencia";

function InspeccionTrabajoActivo({ moduloActivo, formularioSeleccionado }) {
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [aplicaRol, setAplicaRol] = useState("Sí");
  const [superintendencia, setSuperintendencia] = useState("");
  const [condicionObservada, setCondicionObservada] = useState("");

  const gerencia = moduloActivo?.nombre || "";
  const nombreFormulario = formularioSeleccionado?.nombre || "";
  const rutaFormulario = formularioSeleccionado?.ruta || "";

  const superintendencias = obtenerSuperintendenciasPorGerencia(gerencia);

  const tituloFormulario = `${gerencia} / ${nombreFormulario}`;

  useEffect(() => {
    setFechaRegistro("");
    setAplicaRol("Sí");
    setSuperintendencia("");
    setCondicionObservada("");
  }, [rutaFormulario, gerencia]);

  const enviarFormulario = (event) => {
    event.preventDefault();

    if (!fechaRegistro) {
      alert("Debes ingresar la fecha de registro.");
      return;
    }

    if (!superintendencia) {
      alert("Debes seleccionar una superintendencia.");
      return;
    }

    if (!condicionObservada.trim()) {
      alert("Debes ingresar la condición observada.");
      return;
    }

    const datosDemo = {
      gerencia,
      formulario: nombreFormulario,
      ruta: rutaFormulario,
      fechaRegistro,
      aplicaRol,
      superintendencia,
      condicionObservada,
    };

    console.log("Formulario Inspección demo:", datosDemo);

    alert(
      "Formulario enviado correctamente. Esta es una demostración, no se guardaron datos."
    );
  };

  return (
    <form className="contenido-formulario" onSubmit={enviarFormulario}>
      <h2 className="formulario-nivel">{tituloFormulario}</h2>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Fecha de Registro
        </label>

        <input
          type="date"
          value={fechaRegistro}
          onChange={(e) => setFechaRegistro(e.target.value)}
        />
      </div>

      <div className="campo-formulario campo-completo">
        <label>Aplica para este rol</label>

        <select
          value={aplicaRol}
          onChange={(e) => setAplicaRol(e.target.value)}
        >
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Ingrese Superintendencia
        </label>

        <select
          value={superintendencia}
          onChange={(e) => setSuperintendencia(e.target.value)}
        >
          <option value="">Seleccione una superintendencia</option>

          {superintendencias.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Condición observada
        </label>

        <textarea
          value={condicionObservada}
          onChange={(e) => setCondicionObservada(e.target.value)}
          placeholder="Ingrese la condición observada"
        ></textarea>
      </div>

      <div className="acciones-formulario">
        <button type="submit" className="boton-enviar">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default InspeccionTrabajoActivo;