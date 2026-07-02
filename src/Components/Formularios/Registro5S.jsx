import { useEffect, useState } from "react";
import { obtenerSuperintendenciasPorGerencia } from "../../Data/superintendencia";

const opciones5S = {
  elementosNecesarios: [
    "El área nunca ha sido despejada de estos elementos - 1 pts",
    "Se empiezan a sacar elementos pero aún hay elementos innecesarios en el área - 2 pts",
    "Se encuentran elementos en el área que no son necesarios, y se ha definido un plan de retiro - 3 pts",
    "Hay elementos innecesarios en el área, pero cuentan con plan de retiro que no es eficiente porque se encuentran artículos - 4 pts",
    "Sólo están los elementos necesarios en el área - 5 pts",
  ],

  cadaElementoLugar: [
    "No existe definición para la ubicación de los elementos en el área - 1 pts",
    "Se encuentra definida la ubicación de cada elemento, pero aún no se usa - 2 pts",
    "Se encuentra definida la ubicación de cada elemento, pero aún no todos están correctamente ubicados - 3 pts",
    "Todos los elementos se encuentran ubicados e identificados en base al layout, pero no en la cantidad definida - 4 pts",
    "Todos los elementos se encuentran ubicados e identificados en base al layout y en la cantidad definida - 5 pts",
  ],

  sectorLimpio: [
    "El área está sucia y no cuenta con un plan de limpieza - 1 pts",
    "El área está sucia, y cuenta con un plan de limpieza que no se cumple - 2 pts",
    "El área está sucia, y cuenta con un plan de limpieza que se cumple parcialmente - 3 pts",
    "El área está limpia, cuenta con un plan de limpieza y se cumple con la frecuencia definida - 4 pts",
    "Toda el área está limpia, con rutina clara de limpieza. - 5 pts",
  ],

  estandar: [
    "No existe tablero estándar 5S - 1 pts",
    "Existe tablero 5S pero no cumple el estándar definido - 2 pts",
    "Existe tablero 5S pero no se completa la información - 3 pts",
    "Existe tablero 5S, se completa pero la información no está actualizada - 4 pts",
    "Existe tablero 5S y la información se encuentra actualizada - 5 pts",
  ],

  auditorias: [
    "No se realizan auditorías de 5S - 1 pts",
    "Se realizan auditorías de 5S pero no en base al plan, con un resultado bajo lo esperado - 2 pts",
    "Se realizan auditorías de 5S pero en base al plan, con un resultado bajo lo esperado - 3 pts",
    "Se realizan auditorías de 5S en base al plan, con un resultado en base a lo esperado - 4 pts",
    "Se realizan auditorías de 5S en base al plan, con un resultado igual o sobre lo esperado y sostenido en el tiempo - 5 pts",
  ],

  seguimientoGerencia: [
    "Sin soporte y presencia del liderazgo - 1 pts",
    "Poco soporte y algunas participaciones esporádico (visitas, auditoría, etc.) - 2 pts",
    "Existe un soporte menos esporádico parcial con visitas, auditorías y reconocimiento, etc. - 3 pts",
    "La Gerencia soporta las actividades de 5S, pero no reconoce ni provee recursos a los esfuerzos del equipo - 4 pts",
    "La Gerencia está comprometida con las actividades de 5S, los apoya, reconoce y provee recursos a los esfuerzos del equipo - 5 pts",
  ],
};

function Registro5S({ moduloActivo, formularioSeleccionado }) {
  const [fechaEvaluacion, setFechaEvaluacion] = useState("");
  const [superintendencia, setSuperintendencia] = useState("");

  const [evaluacion5S, setEvaluacion5S] = useState({
    elementosNecesarios: "",
    cadaElementoLugar: "",
    sectorLimpio: "",
    estandar: "",
    auditorias: "",
    seguimientoGerencia: "",
  });

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

  const tituloFormulario = `${gerencia} / ${nombreFormulario}`;

  useEffect(() => {
    setFechaEvaluacion("");
    setSuperintendencia("");

    setEvaluacion5S({
      elementosNecesarios: "",
      cadaElementoLugar: "",
      sectorLimpio: "",
      estandar: "",
      auditorias: "",
      seguimientoGerencia: "",
    });

    setModalContramedida(false);
    setContramedida(null);
    setTituloContramedida("");
    setResponsableContramedida("Luis Marquina");
    setFechaContramedida("");
  }, [rutaFormulario, gerencia]);

  const actualizarEvaluacion5S = (campo, valor) => {
    setEvaluacion5S((prev) => ({
      ...prev,
      [campo]: valor,
    }));
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

    if (!fechaEvaluacion) {
      alert("Debes ingresar la fecha de evaluación.");
      return;
    }

    if (!superintendencia) {
      alert("Debes seleccionar una superintendencia.");
      return;
    }

    const campos5SCompletos = Object.values(evaluacion5S).every(
      (valor) => valor !== ""
    );

    if (!campos5SCompletos) {
      alert("Debes completar todos los campos de evaluación 5S.");
      return;
    }

    const datosDemo = {
      gerencia,
      formulario: nombreFormulario,
      ruta: rutaFormulario,
      fechaEvaluacion,
      superintendencia,
      evaluacion5S,
      contramedida,
    };

    console.log("Formulario Registro 5S demo:", datosDemo);

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
          Fecha Evaluación
        </label>

        <input
          type="date"
          value={fechaEvaluacion}
          onChange={(e) => setFechaEvaluacion(e.target.value)}
        />
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Superintendencia a la cual pertenece
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
          Elementos necesarios en el área (Máquinas, equipos, materiales,
          herramientas u objetos personales)
        </label>

        <select
          value={evaluacion5S.elementosNecesarios}
          onChange={(e) =>
            actualizarEvaluacion5S("elementosNecesarios", e.target.value)
          }
        >
          <option value="">Buscar...</option>

          {opciones5S.elementosNecesarios.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Cada elemento en su lugar (Máquinas, equipos, materiales, herramientas
          u objetos personales)
        </label>

        <select
          value={evaluacion5S.cadaElementoLugar}
          onChange={(e) =>
            actualizarEvaluacion5S("cadaElementoLugar", e.target.value)
          }
        >
          <option value="">Buscar...</option>

          {opciones5S.cadaElementoLugar.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Sector limpio y sin filtraciones
        </label>

        <select
          value={evaluacion5S.sectorLimpio}
          onChange={(e) =>
            actualizarEvaluacion5S("sectorLimpio", e.target.value)
          }
        >
          <option value="">Buscar...</option>

          {opciones5S.sectorLimpio.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Estándar
        </label>

        <select
          value={evaluacion5S.estandar}
          onChange={(e) => actualizarEvaluacion5S("estandar", e.target.value)}
        >
          <option value="">Buscar...</option>

          {opciones5S.estandar.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Auditorías de 5S
        </label>

        <select
          value={evaluacion5S.auditorias}
          onChange={(e) => actualizarEvaluacion5S("auditorias", e.target.value)}
        >
          <option value="">Buscar...</option>

          {opciones5S.auditorias.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Seguimiento de la gerencia
        </label>

        <select
          value={evaluacion5S.seguimientoGerencia}
          onChange={(e) =>
            actualizarEvaluacion5S("seguimientoGerencia", e.target.value)
          }
        >
          <option value="">Buscar...</option>

          {opciones5S.seguimientoGerencia.map((opcion) => (
            <option key={opcion} value={opcion}>
              {opcion}
            </option>
          ))}
        </select>
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

export default Registro5S;