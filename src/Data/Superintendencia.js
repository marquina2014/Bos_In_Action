export const superintendenciasPorGerencia = {
  GMESM: ["Palas", "Perforadoras"],

  GMEM: ["Camiones", "EEAA"],

  GPM: ["Producción Mina", "Autonomía"],

  GPMDA: ["Maquinaria", "Desarrollo", "Automatización"],
};

export function obtenerSuperintendenciasPorGerencia(gerencia) {
  return superintendenciasPorGerencia[gerencia] || [];
}