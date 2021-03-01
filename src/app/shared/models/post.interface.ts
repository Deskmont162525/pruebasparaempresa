export interface postI {
  //campos requeridos de la lista a mostrar

  id: number;
  name: string;
  image: string;
  episode: string;
  characters: string;
  url: string;
  created: string;
}

export interface characters {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  url:string;
}

export interface episodios {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: characters[];
}

