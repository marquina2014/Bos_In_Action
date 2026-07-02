import { useEffect, useState } from "react";
import { obtenerSuperintendenciasPorGerencia } from "../../Data/superintendencia";

const tiposDesperdicio = [
  "Espera",
  "Sobreprocesamiento",
  "Sobreproducción",
  "Defecto",
  "Movimiento",
  "Transporte",
  "Competencias",
  "Inventario",
];

const definicionesDesperdicio = [
  "Espera: es cuando el proceso está detenido por actividad que no agrega valor ni es necesario.",
  "Sobreprocesamiento: es todo trabajo adicional al estándar y que no agrega valor ni es necesario.",
  "Sobreproducción: es el trabajo que produce mayores resultados pero que no agrega valor al cliente.",
  "Defecto: es cuando el proceso se ejecuta de mala manera y debe ser ejecutado nuevamente.",
  "Movimiento: es todo traslado innecesario de personas.",
  "Transporte: es todo traslado innecesario de equipos.",
  "Competencias: es la pérdida en la utilización de habilidades de las personas.",
  "Inventario: es tener exceso de stock, producto y materiales que no están siendo procesados y no agregan valor al cliente.",
];

function IdentificacionOportunidades({ moduloActivo, formularioSeleccionado }) {
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [superintendencia, setSuperintendencia] = useState("");
  const [oportunidadIdentificada, setOportunidadIdentificada] = useState("");
  const [tipoDesperdicio, setTipoDesperdicio] = useState("");
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

  const tituloFormulario = `${gerencia} / Identificación Oportunidades`;

  useEffect(() => {
    setFechaRegistro("");
    setSuperintendencia("");
    setOportunidadIdentificada("");
    setTipoDesperdicio("");
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

    if (!fechaRegistro) {
      alert("Debes ingresar la fecha de registro.");
      return;
    }

    if (!superintendencia) {
      alert("Debes seleccionar una superintendencia.");
      return;
    }

    if (!oportunidadIdentificada.trim()) {
      alert("Debes ingresar la oportunidad identificada.");
      return;
    }

    if (!tipoDesperdicio) {
      alert("Debes seleccionar el tipo de desperdicio.");
      return;
    }

    const datosDemo = {
      gerencia,
      formulario: nombreFormulario,
      ruta: rutaFormulario,
      fechaRegistro,
      superintendencia,
      oportunidadIdentificada,
      tipoDesperdicio,
      archivoNombre,
      contramedida,
    };

    console.log("Formulario Identificación de Oportunidades demo:", datosDemo);

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
          Indique Superintendencia
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
          Oportunidad Identificada
        </label>

        <input
          type="text"
          value={oportunidadIdentificada}
          onChange={(e) => setOportunidadIdentificada(e.target.value)}
          placeholder="Ingrese la oportunidad identificada"
        />
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Tipo de Desperdicio
        </label>

        <div className="texto-ayuda-desperdicio">
          {definicionesDesperdicio.map((definicion) => (
            <p key={definicion}>-{definicion}</p>
          ))}
        </div>

        <select
          value={tipoDesperdicio}
          onChange={(e) => setTipoDesperdicio(e.target.value)}
        >
          <option value="">Buscar...</option>

          {tiposDesperdicio.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>Evidencia de la oportunidad detectada</label>

        <div className="adjunto-box">
          <p className="adjunto-estado">
            {archivoNombre ? archivoNombre : "No hay archivos cargados"}
          </p>

          <label className="adjunto-boton">
            <input
              type="file"
              onChange={cambiarArchivo}
              accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
            />

            <span>📎 Cargar Archivo</span>
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
                <option value="Luis Marquina">Luis Marquina</option>
                <option value="María González">María González</option>
                <option value="Carlos Pérez">Carlos Pérez</option>
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

export default IdentificacionOportunidades;