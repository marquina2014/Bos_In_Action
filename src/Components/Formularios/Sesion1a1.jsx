import { useEffect, useState } from "react";

function Sesion1a1({ moduloActivo, formularioSeleccionado }) {
  const [fechaSesion, setFechaSesion] = useState("");
  const [codigoSapCoachee, setCodigoSapCoachee] = useState("");

  const gerencia = moduloActivo?.nombre || "";
  const nombreFormulario = formularioSeleccionado?.nombre || "";
  const rutaFormulario = formularioSeleccionado?.ruta || "";

  const tituloFormulario = `${gerencia} / ${nombreFormulario}`;

  useEffect(() => {
    setFechaSesion("");
    setCodigoSapCoachee("");
  }, [rutaFormulario, gerencia]);

  const enviarFormulario = (event) => {
    event.preventDefault();

    if (!fechaSesion) {
      alert("Debes ingresar la fecha de sesión.");
      return;
    }

    if (!codigoSapCoachee.trim()) {
      alert("Debes ingresar el código SAP del coachee.");
      return;
    }

    const datosDemo = {
      gerencia,
      formulario: nombreFormulario,
      ruta: rutaFormulario,
      fechaSesion,
      codigoSapCoachee,
    };

    console.log("Formulario Sesión 1 a 1 demo:", datosDemo);

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
          Ingresar fecha de sesión
        </label>

        <input
          type="date"
          value={fechaSesion}
          onChange={(e) => setFechaSesion(e.target.value)}
        />
      </div>

      <div className="campo-formulario campo-completo">
        <label>
          <span className="obligatorio">*</span>
          Ingresar código SAP del coachee
        </label>

        <input
          type="text"
          value={codigoSapCoachee}
          onChange={(e) => setCodigoSapCoachee(e.target.value)}
          placeholder="Ingrese código SAP"
        />
      </div>

      <div className="acciones-formulario">
        <button type="submit" className="boton-enviar">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default Sesion1a1;