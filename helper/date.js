export function getFormattedDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}


export function getLastWeek(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}


// cecci est utlise pour le format de la date ds l'affichage 