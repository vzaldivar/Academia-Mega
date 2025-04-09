export function obtenerfechaActual() {
    const fecha = new Date();
    return fecha.toLocaleDateString();
}

export function obtenerhoraActual() {
    const fecha = new Date();
    return fecha.toLocaleTimeString();
}
