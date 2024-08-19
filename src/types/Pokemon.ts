export interface PokemonResult{
    name:string,
    url:string,
}

export interface PokemonResponse{
    count:number;
    results: PokemonResult[];
}


export interface PokemonType{
    type:{
        name:string;
    }
}

export interface DeatilResponse{
    types: PokemonType[];
    id:number;
    sprites:{
        front_default:string;
    }
}

export interface DetailInfo extends PokemonResult{
    KoreanName: string;
    imageUrl:string;
    id: number;
    types: string[];
}