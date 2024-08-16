export interface PokemonResult{
    name:string,
    url:string,
}

export interface PokemonResponse{
    count:number;
    next:string | null;
    previous:null | null;
    results: PokemonResult[];
}

export interface DetailInfo extends PokemonResult{
    KoreanName: string;
    imageUrl:string;
}