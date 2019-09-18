import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';
import { PokeGenerationInterface } from '../models/poke-generation.interface';
import { PokemonDataInterface } from '../models/pokemon-data.interface';
import { PokemonSpritesInterface } from '../models/poke-sprites.inteface';

const URL_POKEMON_GENERATION = environment.APIs.pokemonGeneration;
const URL_POKEMON_SPRITES = environment.APIs.pokemonSprites;

@Injectable({
  providedIn: 'root'
})
export class PokeGenerationService {

  constructor(private http: HttpClient) { }

  public getAllPokeGeneration() {
    return this.http.get<PokeGenerationInterface>(URL_POKEMON_GENERATION);
  }

  public getChoosedPokeGeneration(generation: number) {
    return this.http.get<PokeGenerationInterface>(`${URL_POKEMON_GENERATION}/${generation}`);
  }

  public getPokemonData(urlData: string) {
    return this.http.get<PokemonDataInterface>(`${urlData}`);
  }
  public getPokemonSprites(id: number) {
    return this.http.get<PokemonSpritesInterface>(`${URL_POKEMON_SPRITES}/${id}`);
  }
}
