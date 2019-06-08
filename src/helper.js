export function obtenerDiferenciaAnio(year) {
    return new Date().getFullYear() - year;
}

export function calcularMarca(modelo) {
    let incremento;

    switch (modelo) {
        case 'europeo':
            incremento = 0.30;
            break;
        case 'americano':
            incremento = 0.15;
            break;
        case 'asiatico':
            incremento = 0.05;
            break;
        default:
            break;
    }

    return incremento;
}

export function obtenerPlan(plan) {
    return (plan === 'basico') ? 0.20 : 0.50;
}

export function primeraMayuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}