export type Movie = {
  imdbID: string;
  title: string;
  year?: number;
  released?: string; // ISO string (converti)
  director?: string;
  actors?: string[]; // parsé depuis "Actors"
  poster?: string;
  imdbRating?: number; // number si dispo
};

export type Filters = {
  query: string;
  yearFrom?: number;
  yearTo?: number;
  director?: string; // substring match
  actor?: string; // substring match
  sortBy: "released" | "title" | "rating";
  sortDir: "asc" | "desc";
};
