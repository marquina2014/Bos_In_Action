import { useEffect, useState } from "react";

function RegistroMOP({ moduloActivo, formularioSeleccionado }) {
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [fotoPreview, setFotoPreview] = useState("");
  const [nombreArchivo, setNombreArchivo] = useState("");

  const gerencia = moduloActivo?.nombre || "";
  const nombreFormulario = formularioSeleccionado?.nombre || "";
  const rutaFormulario = formularioSeleccionado?.ruta || "";

  const tituloFormulario = `${gerencia} / MOP L1`;

  useEffect(() => {
    setFechaRegistro("");
    setFotoPreview("");
    setNombreArchivo("");
  }, [rutaFormulario, gerencia]);

  const cambiarFoto = (event) => {
    const archivo = event.target.files[0];

    if (!archivo) return;

    if (!archivo.type.startsWith("image/")) {
      alert("Debes cargar una imagen.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setFotoPreview(reader.result);
      setNombreArchivo(archivo.name);
    };

    reader.readAsDataURL(archivo);
  };

  const enviarFormulario = (event) => {
    event.preventDefault();

    if (!fechaRegistro) {
      alert("Debes ingresar la fecha de registro.");
      return;
    }

    if (!fotoPreview) {
      alert("Debes cargar una fotografía.");
      return;
    }

    const datosDemo = {
      gerencia,
      formulario: nombreFormulario,
      ruta: rutaFormulario,
      fechaRegistro,
      nombreArchivo,
    };

    console.log("Formulario Registro MOP demo:", datosDemo);

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
          Fecha Registro
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
          Registro Fotográfico
        </label>

        <label className="carga-foto">
          <input type="file" accept="image/*" onChange={cambiarFoto} />

          {fotoPreview ? (
            <div className="foto-preview-contenedor">
              <img
                src={fotoPreview}
                alt="Vista previa"
                className="foto-preview"
              />

              <div className="foto-info">
                <span>Cambiar foto</span>
                <small>{nombreArchivo}</small>
              </div>
            </div>
          ) : (
            <div className="foto-placeholder">
              <span className="foto-icono">＋</span>
              <p>Clic para cargar foto</p>
            </div>
          )}
        </label>
      </div>

      <div className="acciones-formulario">
        <button type="submit" className="boton-enviar">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default RegistroMOP;