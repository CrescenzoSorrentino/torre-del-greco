export function formattaData(data: string) {
  return new Date(data).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Rome",
  });
}

export function vuoleApostrofo(data: string) {
  const giorno = data.slice(8);
  if (giorno === "08" || giorno === "11") return true;
  else return false;
}

export function fraseStato(stato: string, data: string | null) {
  if (stato === "annunciato") {
    if (data === null) {
      return "Annunciato, data da definire";
    }
    const articolo = vuoleApostrofo(data) ? "l'" : "il ";
    return `Parte ${articolo}${formattaData(data)}`;
  }
  if (stato === "in corso") {
    if (data === null) {
      return "In corso";
    }
    const preposizione = vuoleApostrofo(data) ? "dall'" : "dal ";
    return `In corso ${preposizione}${formattaData(data)}`;
  }
  if (stato === "completato") {
    return "Completato";
  }
  return stato;
}
