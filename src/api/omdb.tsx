const API = "https://www.omdbapi.com/";
const KEY = import.meta.env.VITE_OMDB_API_KEY as string;

function assertKey() {
  if (!KEY) {
    throw new Error(
      "OMDb API key manquante (VITE_OMDB_API_KEY). Vérifie ton .env.local puis redémarre."
    );
  }
}

function toISODate(d?: string) {
  // TODO: si pas de valeur ou "N/A" => undefined
  // TODO: new Date(d), si invalide => undefined
  // TODO: sinon => toISOString()
}
