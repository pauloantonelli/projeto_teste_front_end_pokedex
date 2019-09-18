export interface PokemonSpritesInterface {
    sprites: {
        back_default: string,
        back_shiny: string,
        front_default: string,
        front_shiny: string,
    };
    types: [
        {
            slot: number,
            type: {
                name: string,
                url: string,
            }
        }
    ];
}