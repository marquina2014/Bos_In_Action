import { useEffect, useState } from "react";
import { obtenerSuperintendenciasPorGerencia } from "../../Data/superintendencia";

const usuarios = [
  "Luis Marquina",
  "María González",
  "Carlos Pérez",
];

const niveles = ["L1", "L2", "L3", "L4"];

const dimensiones = [
  "Seguridad",
  "Medio Ambiente",
  "Personas & Cultura",
  "Producción",
  "Costos",
  "Otro",
];

function ResolucionProblemas({ moduloActivo, formularioSeleccionado }) {
  const [nombreRdp, setNombreRdp] = useState("");
  const [lider, setLider] = useState("");
  const [nivel, setNivel] = useState("");
  const [superintendencia, setSuperintendencia] = useState("");
  const [fechaRdp, setFechaRdp] = useState("");
  const [dimension, setDimension] = useState("");
  const [archivoNombre, setArchivoNombre] = useState("");

  const [modalContramedida, setModalContramedida] = useState(false);
  const [contramedida, setContramedida] = useState(null);

  const [tituloContramedida, setTituloContramedida] = useState("");
  const [responsableContramedida, setResponsableContramedida] =
    useState("Luis Marquina");
  const [fechaContramedida, setFechaContramedida] = useState("");

  const gerencia = moduloActivo?.nombre || "";
  const nombreFormulario = formularioSeleccionado?.nombre || "";
  const rutaFormulario = formularioSeleccionado?.ruta || "";

  const superintendencias = obtenerSuperintendenciasPorGerencia(gerencia);

  const tituloFormulario = `${gerencia} / RDP`;

  useEffect(() => {
    setNombreRdp("");
    setLider("");
    setNivel("");
    setSuperintendencia("");
    setFechaRdp("");
    setDimension("");
    setArchivoNombre("");

    setModalContramedida(false);
    setContramedida(null);
    setTituloContramedida("");
    setResponsableContramedida("Luis Marquina");
    setFechaContramedida("");
  }, [rutaFormulario, gerencia]);

  const cambiarArchivo = (event) => {
    const archivo = event.target.files[0];

    if (!archivo) return;

    setArchivoNombre(archivo.name);
  };

  const abrirModalContramedida = () => {
    setModalContramedida(true);
  };

  const cerrarModalContramedida = () => {
    setModalContramedida(false);
  };

  const aceptarContramedida = () => {
    if (!tituloContramedida.trim()) {
      alert("Debes ingresar el título de la contramedida.");
      return;
    }

    if (!responsableContramedida) {
      alert("Debes seleccionar el responsable.");
      return;
    }

    if (!fechaContramedida) {
      alert("Debes ingresar la fecha de cierre.");
      return;
    }

    setContramedida({
      titulo: tituloContramedida,
      responsable: responsableContramedida,
      fecha: fechaContramedida,
    });

    setModalContramedida(false);
    alert("Se realizó la acción de contramedida.");
  };

  const enviarFormulario = (event) => {
    event.preventDefault();

    if (!nombreRdp.trim()) {
      alert("Debes ingresar el nombre de RDP.");
      return;
    }

    if (!lider) {
      alert("Debes seleccionar el líder.");
      return;
    }

    if (!nivel) {
      alert("Debes seleccionar el nivel.");
      return;
    }

    if (!superintendencia) {
      alert("Debes seleccionar la superintendencia.");
      return;
    }

    if (!fechaRdp) {
      alert("Debes ingresar la fecha de RDP.");
      return;
    }

    if (!dimension) {
      alert("Debes seleccionar la dimensión.");
      return;
    }

    const datosDemo = {
      gerencia,
      formulario: nombreFormulario,
      ruta: rutaFormulario,
      nombreRdp,
      lider,
      nivel,
      superintendencia,
      fechaRdp,
      dimension,
      archivoNombre,
      contramedida,
    };

    console.log("Formulario RDP demo:", datosDemo);

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
          Nombre de RDP
        </label>

        <input
          type="text"
          value={nombreRdp}
          onChange={(e) => setNombreRdp(e.target.value)}
          placeholder="Ingrese nombre de RDP"
        />
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Líder
        </label>

        <select value={lider} onChange={(e) => setLider(e.target.value)}>
          <option value="">Buscar...</option>

          {usuarios.map((usuario) => (
            <option key={usuario} value={usuario}>
              {usuario}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Nivel
        </label>

        <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
          <option value="">Buscar...</option>

          {niveles.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Superintendencia
        </label>

        <select
          value={superintendencia}
          onChange={(e) => setSuperintendencia(e.target.value)}
        >
          <option value="">Buscar...</option>

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
          Fecha de RDP
        </label>

        <input
          type="date"
          value={fechaRdp}
          onChange={(e) => setFechaRdp(e.target.value)}
        />
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Dimensión
        </label>

        <select
          value={dimension}
          onChange={(e) => setDimension(e.target.value)}
        >
          <option value="">Buscar...</option>

          {dimensiones.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Archivos Adjuntos
        </label>

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

            <span>📎 Añadir Archivo</span>
          </label>
        </div>
      </div>

      <div className="bloque-contramedida">
        <button
          type="button"
          className="boton-agregar-contramedida"
          onClick={abrirModalContramedida}
        >
          <span>Agregar contramedida</span>
          <strong>＋</strong>
        </button>

        {contramedida && (
          <div className="resumen-contramedida">
            <div>
              <label>Nombre de la Contramedida</label>
              <p>{contramedida.titulo}</p>
            </div>

            <div>
              <label>Fecha Cierre de la Contramedida</label>
              <p>{contramedida.fecha}</p>
            </div>

            <div>
              <label>Responsable de la Contramedida</label>
              <p>{contramedida.responsable}</p>
            </div>

            <button
              type="button"
              className="editar-contramedida"
              onClick={abrirModalContramedida}
            >
              ✎
            </button>
          </div>
        )}
      </div>

      <div className="acciones-formulario">
        <button type="submit" className="boton-enviar">
          Enviar
        </button>
      </div>

      {modalContramedida && (
        <div className="modal-overlay">
          <div className="modal-contramedida">
            <button
              type="button"
              className="cerrar-modal"
              onClick={cerrarModalContramedida}
            >
              ×
            </button>

            <h3>Agregar Contramedida</h3>

            <div className="campo-formulario campo-completo">
              <label>Título Contramedida *</label>
              <input
                type="text"
                value={tituloContramedida}
                onChange={(e) => setTituloContramedida(e.target.value)}
                placeholder="Ingrese título de la contramedida"
              />
            </div>

            <div className="campo-formulario campo-completo">
              <label>Responsable *</label>
              <select
                value={responsableContramedida}
                onChange={(e) => setResponsableContramedida(e.target.value)}
              >
                {usuarios.map((usuario) => (
                  <option key={usuario} value={usuario}>
                    {usuario}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo-formulario campo-completo">
              <label>Fecha *</label>
              <input
                type="date"
                value={fechaContramedida}
                onChange={(e) => setFechaContramedida(e.target.value)}
              />
            </div>

            <div className="acciones-modal">
              <button
                type="button"
                className="boton-enviar"
                onClick={aceptarContramedida}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

export default ResolucionProblemas;