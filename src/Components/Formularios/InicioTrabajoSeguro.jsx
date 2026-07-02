import { useEffect, useState } from "react";

function InicioTrabajoSeguro({ moduloActivo, formularioSeleccionado }) {
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [aplicaRol, setAplicaRol] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [archivoNombre, setArchivoNombre] = useState("");

  const gerencia = moduloActivo?.nombre || "";
  const nombreFormulario = formularioSeleccionado?.nombre || "";
  const rutaFormulario = formularioSeleccionado?.ruta || "";

  const tituloFormulario = `${gerencia} / Registro inicio seguro`;

  const tiposDocumento = ["DAS", "Charla de Seguridad", "IS", "Otras"];

  useEffect(() => {
    setFechaRegistro("");
    setAplicaRol("");
    setTipoDocumento("");
    setArchivoNombre("");
  }, [rutaFormulario, gerencia]);

  const cambiarArchivo = (event) => {
    const archivo = event.target.files[0];

    if (!archivo) return;

    setArchivoNombre(archivo.name);
  };

  const enviarFormulario = (event) => {
    event.preventDefault();

    if (!fechaRegistro) {
      alert("Debes ingresar la fecha de registro.");
      return;
    }

    if (!aplicaRol) {
      alert("Debes indicar si aplica este reporte para tu rol.");
      return;
    }

    if (!tipoDocumento) {
      alert("Debes seleccionar el tipo de documento a respaldar.");
      return;
    }

    const datosDemo = {
      gerencia,
      formulario: nombreFormulario,
      ruta: rutaFormulario,
      fechaRegistro,
      aplicaRol,
      tipoDocumento,
      archivoNombre,
    };

    console.log("Formulario Inicio Trabajo Seguro demo:", datosDemo);

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
        <label>
          <span className="obligatorio">*</span>
          ¿Aplica este reporte para su Rol.?
        </label>

        <select
          value={aplicaRol}
          onChange={(e) => setAplicaRol(e.target.value)}
        >
          <option value="">Buscar...</option>
          <option value="Sí">Sí</option>
          <option value="No">No</option>
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Tipo de documento a respaldar
        </label>

        <select
          value={tipoDocumento}
          onChange={(e) => setTipoDocumento(e.target.value)}
        >
          <option value="">Buscar...</option>

          {tiposDocumento.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>Ingrese documento adjunto</label>

        <div className="adjunto-box">
          <p className="adjunto-estado">
            {archivoNombre ? archivoNombre : "No hay ningún archivo."}
          </p>

          <label className="adjunto-boton">
            <input
              type="file"
              onChange={cambiarArchivo}
              accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
            />

            <span>📎 Añadir archivo</span>
          </label>
        </div>
      </div>

      <div className="acciones-formulario">
        <button type="submit" className="boton-enviar">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default InicioTrabajoSeguro;