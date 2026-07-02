import { useMemo, useState } from "react";
import "./GestionUsuario.css";

const usuariosBase = [
  {
    id: 2,
    usuario: "Luis Marquina",
    correo: "luis.marquina@bhp.com",
    rol: "Admin",
    activo: "Sí",
    notificar: false,
  },
  {
    id: 3,
    usuario: "María González",
    correo: "maria.gonzalez@bhp.com",
    rol: "Usuario",
    activo: "Sí",
    notificar: false,
  },
  {
    id: 4,
    usuario: "Carlos Pérez",
    correo: "carlos.perez@bhp.com",
    rol: "Supervisor",
    activo: "No",
    notificar: false,
  },
];

const usuariosDisponibles = [
  "Luis Marquina",
  "María González",
  "Carlos Pérez",
  "Ana Torres",
  "Javier Muñoz",
  "Carolina Salazar",
];

const rolesDisponibles = ["Admin", "Usuario", "Supervisor"];

function GestionUsuario() {
  const [usuarios, setUsuarios] = useState(usuariosBase);

  const [filtros, setFiltros] = useState({
    usuario: "",
    id: "",
    rol: "",
    activo: "",
  });

  const [modalUsuarioAbierto, setModalUsuarioAbierto] = useState(false);
  const [modoModalUsuario, setModoModalUsuario] = useState("agregar");
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const [formularioModalUsuario, setFormularioModalUsuario] = useState({
    usuario: "",
    rol: "Admin",
    notificar: false,
  });

  const opcionesUsuario = useMemo(() => {
    return [...new Set(usuarios.map((item) => item.usuario))];
  }, [usuarios]);

  const opcionesId = useMemo(() => {
    return [...new Set(usuarios.map((item) => item.id))];
  }, [usuarios]);

  const opcionesRol = useMemo(() => {
    return [...new Set(usuarios.map((item) => item.rol))];
  }, [usuarios]);

  const opcionesActivo = useMemo(() => {
    return [...new Set(usuarios.map((item) => item.activo))];
  }, [usuarios]);

  const usuariosFiltrados = useMemo(() => {
    return usuarios.filter((usuario) => {
      const coincideUsuario =
        filtros.usuario === "" || usuario.usuario === filtros.usuario;

      const coincideId =
        filtros.id === "" || usuario.id.toString() === filtros.id.toString();

      const coincideRol = filtros.rol === "" || usuario.rol === filtros.rol;

      const coincideActivo =
        filtros.activo === "" || usuario.activo === filtros.activo;

      return coincideUsuario && coincideId && coincideRol && coincideActivo;
    });
  }, [usuarios, filtros]);

  const actualizarFiltro = (campo, valor) => {
    setFiltros((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const limpiarFiltros = () => {
    setFiltros({
      usuario: "",
      id: "",
      rol: "",
      activo: "",
    });
  };

  const generarCorreo = (nombreUsuario) => {
    return `${nombreUsuario
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, ".")}@bhp.com`;
  };

  const crearUsuario = () => {
    setModoModalUsuario("agregar");
    setUsuarioEditando(null);

    setFormularioModalUsuario({
      usuario: "",
      rol: "Admin",
      notificar: false,
    });

    setModalUsuarioAbierto(true);
  };

  const editarUsuario = (usuario) => {
    setModoModalUsuario("editar");
    setUsuarioEditando(usuario);

    setFormularioModalUsuario({
      usuario: usuario.usuario,
      rol: usuario.rol,
      notificar: usuario.notificar || false,
    });

    setModalUsuarioAbierto(true);
  };

  const cerrarModalUsuario = () => {
    setModalUsuarioAbierto(false);
    setUsuarioEditando(null);
  };

  const actualizarFormularioModal = (campo, valor) => {
    setFormularioModalUsuario((prev) => ({
      ...prev,
      [campo]: valor,
    }));
  };

  const aceptarModalUsuario = () => {
    if (!formularioModalUsuario.usuario) {
      alert("Debes seleccionar un usuario.");
      return;
    }

    if (!formularioModalUsuario.rol) {
      alert("Debes seleccionar un rol.");
      return;
    }

    if (modoModalUsuario === "agregar") {
      const nuevoUsuario = {
        id: usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1,
        usuario: formularioModalUsuario.usuario,
        correo: generarCorreo(formularioModalUsuario.usuario),
        rol: formularioModalUsuario.rol,
        activo: "Sí",
        notificar: formularioModalUsuario.notificar,
      };

      setUsuarios((prev) => [...prev, nuevoUsuario]);
    }

    if (modoModalUsuario === "editar" && usuarioEditando) {
      setUsuarios((prev) =>
        prev.map((usuario) =>
          usuario.id === usuarioEditando.id
            ? {
                ...usuario,
                usuario: formularioModalUsuario.usuario,
                correo: generarCorreo(formularioModalUsuario.usuario),
                rol: formularioModalUsuario.rol,
                notificar: formularioModalUsuario.notificar,
              }
            : usuario
        )
      );
    }

    cerrarModalUsuario();
  };

  const eliminarUsuario = (usuarioEliminar) => {
    const confirmar = window.confirm(
      `¿Deseas eliminar a ${usuarioEliminar.usuario}?`
    );

    if (!confirmar) return;

    setUsuarios((prev) =>
      prev.filter((usuario) => usuario.id !== usuarioEliminar.id)
    );
  };

  return (
    <section className="gestion-usuario">
      <header className="gestion-header">
        <div>
          <div className="gestion-titulo">
            <span className="gestion-icono">👤</span>
            <h1>Gestión de usuario</h1>
          </div>

          <p>Listado, búsqueda y administración de usuarios del sistema.</p>
        </div>

        <button type="button" className="boton-nuevo" onClick={crearUsuario}>
          + Nuevo Usuario
        </button>
      </header>

      <div className="gestion-card">
        <div className="gestion-card-header">
          <div>
            <h2>Listado de usuarios</h2>
            <p>Filtra por usuario, ID, rol o estado activo.</p>
          </div>
        </div>

        <div className="filtros-con-acciones">
          <div className="filtros-usuarios">
            <div className="filtro">
              <label>Usuario</label>
              <select
                value={filtros.usuario}
                onChange={(e) => actualizarFiltro("usuario", e.target.value)}
              >
                <option value="">Buscar</option>

                {opcionesUsuario.map((usuario) => (
                  <option key={usuario} value={usuario}>
                    {usuario}
                  </option>
                ))}
              </select>
            </div>

            <div className="filtro">
              <label>ID</label>
              <select
                value={filtros.id}
                onChange={(e) => actualizarFiltro("id", e.target.value)}
              >
                <option value="">Buscar</option>

                {opcionesId.map((id) => (
                  <option key={id} value={id}>
                    {id}
                  </option>
                ))}
              </select>
            </div>

            <div className="filtro">
              <label>Rol</label>
              <select
                value={filtros.rol}
                onChange={(e) => actualizarFiltro("rol", e.target.value)}
              >
                <option value="">Buscar</option>

                {opcionesRol.map((rol) => (
                  <option key={rol} value={rol}>
                    {rol}
                  </option>
                ))}
              </select>
            </div>

            <div className="filtro">
              <label>Activo</label>
              <select
                value={filtros.activo}
                onChange={(e) => actualizarFiltro("activo", e.target.value)}
              >
                <option value="">Buscar</option>

                {opcionesActivo.map((activo) => (
                  <option key={activo} value={activo}>
                    {activo}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="button"
            className="boton-limpiar-filtros"
            onClick={limpiarFiltros}
            title="Limpiar filtros"
          >
            <span className="icono-limpiar">↺</span>
            <span className="texto-limpiar">Limpiar</span>
          </button>
        </div>

        <div className="tabla-contenedor">
          <table className="tabla-usuarios">
            <thead>
              <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Correo</th>
                <th>Rol</th>
                <th>Activo</th>
                <th>Editar</th>
              </tr>
            </thead>

            <tbody>
              {usuariosFiltrados.length > 0 ? (
                usuariosFiltrados.map((usuario) => (
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.usuario}</td>
                    <td>{usuario.correo}</td>
                    <td>
                      <span className="badge-rol">{usuario.rol}</span>
                    </td>
                    <td>
                      <span
                        className={
                          usuario.activo === "Sí"
                            ? "badge-activo"
                            : "badge-inactivo"
                        }
                      >
                        {usuario.activo}
                      </span>
                    </td>
                    <td>
                      <div className="acciones-fila">
                        <button
                          type="button"
                          className="editar"
                          onClick={() => editarUsuario(usuario)}
                        >
                          ✎
                        </button>

                        <button
                          type="button"
                          className="eliminar"
                          onClick={() => eliminarUsuario(usuario)}
                        >
                          🗑
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="sin-resultados">
                    No se encontraron usuarios con los filtros aplicados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {modalUsuarioAbierto && (
        <div className="modal-usuario-overlay">
          <div className="modal-usuario">
            <button
              type="button"
              className="modal-usuario-cerrar"
              onClick={cerrarModalUsuario}
            >
              ×
            </button>

            <h2>
              {modoModalUsuario === "agregar"
                ? "Agregar usuario"
                : "Editar usuario"}
            </h2>

            <div className="campo-modal-usuario">
              <label>Usuario *</label>

              <select
                value={formularioModalUsuario.usuario}
                onChange={(e) =>
                  actualizarFormularioModal("usuario", e.target.value)
                }
              >
                <option value="">Buscar...</option>

                {usuariosDisponibles.map((usuario) => (
                  <option key={usuario} value={usuario}>
                    {usuario}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo-modal-usuario">
              <label>Rol *</label>

              <select
                value={formularioModalUsuario.rol}
                onChange={(e) =>
                  actualizarFormularioModal("rol", e.target.value)
                }
              >
                {rolesDisponibles.map((rol) => (
                  <option key={rol} value={rol}>
                    {rol}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo-modal-usuario">
              <label>Notificar *</label>

              <div className="switch-contenedor">
                <button
                  type="button"
                  className={`switch-modal ${
                    formularioModalUsuario.notificar ? "activo" : ""
                  }`}
                  onClick={() =>
                    actualizarFormularioModal(
                      "notificar",
                      !formularioModalUsuario.notificar
                    )
                  }
                >
                  <span></span>
                </button>

                <strong>
                  {formularioModalUsuario.notificar ? "Sí" : "No"}
                </strong>
              </div>
            </div>

            <div className="modal-usuario-acciones">
              <button
                type="button"
                className="boton-aceptar-usuario"
                onClick={aceptarModalUsuario}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GestionUsuario;