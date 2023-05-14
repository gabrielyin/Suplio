export function chipColor(status) {
    const colors = {
        Pendente: 'bg-amber-100 text-amber-600',
        Confirmado: 'bg-green-100 text-green-600',
        Cancelado: 'bg-red-100 text-red-600',
        OK: 'bg-green-100 text-green-600',
        Médio: 'bg-amber-100, text-amber-600',
        Baixo: 'bg-red-100 text-red-600',
    }

    return colors[status]
}