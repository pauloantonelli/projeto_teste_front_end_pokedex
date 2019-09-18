export interface PokemonDataInterface {
    color: {
        name: string,
    };
    flavor_text_entries: [
        {
            flavor_text: string;
            language: {
                name: string,
                url: string
            },
            version: {
                name: string,
                url: string
            }
        }
    ];
    genera: [
        {
            genus: string;
            language: {
                name: string,
                url: string,
            }
        }
    ];
    habitat: {
        name: string,
    };
    id: number;
    name: string;
    names: [
        {
            language: {
                name: string, // ja
                url: string,
            }
            name: string, // nome japones
        }
    ];
}
