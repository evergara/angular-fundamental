export interface Heroe {
  id?: string;
  superhero: string;
  publisher: EnumPublisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img?: string;
}

export enum EnumPublisher {
  DCComics = 'CD Comics',
  MarvelComics = 'Marvel Comics',
}

export interface Publisher {
  id: string;
  name: string;
}
