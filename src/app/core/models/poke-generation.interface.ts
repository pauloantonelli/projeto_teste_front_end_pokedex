export interface PokeGenerationInterface {
    count: number;
    next: null;
    previous: null;
    results: [
      {
        name: string;
        url: string;
      }
    ];
  }