import { Component, OnInit, ViewEncapsulation, AfterContentInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Observable, Observer, Subscription, fromEvent } from 'rxjs';

import { PokeGenerationService } from '../core/services/poke-generation.service';
import { PokeGenerationInterface } from '../core/models/poke-generation.interface';
import { PokemonDataInterface } from '../core/models/pokemon-data.interface';
import { PokemonSpritesInterface } from '../core/models/poke-sprites.inteface';
import { PokemonSpecies } from '../core/models/poke-species.interface';

@Component({
  selector: 'app-pokedex-main',
  templateUrl: './pokedex-main.component.html',
  styleUrls: ['./pokedex-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokedexMainComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public generation: PokeGenerationInterface;
  public generationState: boolean[] = [];

  public pokemonSpecies: Observable<PokemonSpecies[]>;

  public pokemonChoosedData: PokemonDataInterface;
  public pokemonChoosedSprites: PokemonSpritesInterface;
  public pokemonChangeSprite = true;

  constructor(private pokeGenerationService: PokeGenerationService) { }

  ngOnInit() {
    this.getAllPokeGeneration();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  generationChoosed(choise: number) {
    this.generationState.fill(false);
    this.generationState[choise] = true;
    this.getChoosedPokeGeneration(choise + 1);
  }

  getAllPokeGeneration() {
    this.subscription = this.pokeGenerationService.getAllPokeGeneration().subscribe(
      (res) => {
        this.generation = res;
        this.generationState = Array(this.generation.count).fill(false);
      }
    );
  }
  getChoosedPokeGeneration(generation: number) {
    this.subscription = this.pokeGenerationService.getChoosedPokeGeneration(generation).subscribe(
      (res) => {
        this.pokemonSpecies = new Observable((observer: Observer<any[]>) => {
          // tslint:disable-next-line: no-string-literal
          observer.next(res['pokemon_species']);
        });
      }
    );
  }
  getPokemonData(urlData: string) {
    this.subscription = this.pokeGenerationService.getPokemonData(urlData).subscribe(
      (res) => {
        this.pokemonChoosedData = res;
        this.getPokemonSprites(res.id);
      }
    );
  }
  getPokemonSprites(pokemonID: number) {
    this.subscription = this.pokeGenerationService.getPokemonSprites(pokemonID).subscribe(
      (res) => {
        this.pokemonChoosedSprites = res;
      }
    );
  }
  changeImageSprites() {
    this.pokemonChangeSprite = !this.pokemonChangeSprite;
  }

  activePokeOption(matTabLabelNumber: number) {
    this.deactivePokeOption(matTabLabelNumber);
    const matLabel = document.getElementById(`mat-tab-label-0-${matTabLabelNumber}`);
    matLabel.style.textAlign = 'center';
    matLabel.style.font = '10px/13px Roboto';
    matLabel.style.fontWeight = 'bold';
    matLabel.style.letterSpacing = '1.25px';
    matLabel.style.color = '#611829';
    matLabel.style.background = 'transparent linear-gradient(180deg, #EEEEEE 0%, #FAFAFA 100%) 0% 0% no-repeat padding-box';
    matLabel.style.borderLeft = 'none';
    matLabel.style.borderRight = 'none';
    matLabel.style.opacity = '1';
    matLabel.style.padding = '0px 4px';
  }
  deactivePokeOption(matTabLabelNumber: number) {
    for (let i = 0; i < this.generation.results.length; i++) {
      if (i !== matTabLabelNumber) {
        const matLabel = document.getElementById(`mat-tab-label-0-${i}`);
        matLabel.style.textAlign = 'center';
        matLabel.style.font = '10px/13px Roboto';
        matLabel.style.fontWeight = 'normal';
        matLabel.style.letterSpacing = '1.25px';
        matLabel.style.color = '#999999';
        matLabel.style.background = '#EEEEEE 0% 0% no-repeat padding-box';
        matLabel.style.borderLeft = '1px solid #CCCCCC';
        matLabel.style.borderRight = '1px solid #CCCCCC';
        matLabel.style.opacity = '1';
        matLabel.style.padding = '0px 4px';
      }
    }
  }
}
