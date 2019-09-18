import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
export interface PokeGenerationsInterface {
  pokeNumber: number;
  pokeState: boolean;
}

@Component({
  selector: 'app-pokedex-main',
  templateUrl: './pokedex-main.component.html',
  styleUrls: ['./pokedex-main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PokedexMainComponent implements OnInit {

  public generation = Array(2).fill(false);
  public pokeGenerations = Array(7).fill(false);

  public asyncTabs: Observable<ExampleTab[]>;
  public backgroundColors = '';

  public textArea = 'Lorem ipsum platea primis inceptos dictumst sapien non, suspendisse sit in nisi senectus ornare dictum accumsan, ut nisl pretium tristique duis at. feugiat in hendrerit sodales auctor sollicitudin eros diam accumsan, tempor cubilia curae consequat non torquent ultricies rhoncus leo, interdum pretium ante accumsan litora phasellus bibendum. litora ligula augue diam vestibulum ac vel feugiat scelerisque felis, malesuada nisi aliquam interdum tellus neque feugiat eleifend ligula per, vivamus sociosqu purus ut potenti molestie dapibus volutpat. tortor faucibus commodo faucibus egestas libero sit litora, lobortis vel metus in sapien aliquam taciti, mollis accumsan fames scelerisque auctor justo, aptent nostra litora mi turpis pharetra, Lorem ipsum platea primis inceptos dictumst sapien non, suspendisse sit in nisi senectus ornare dictum accumsan, ut nisl pretium tristique duis at. feugiat in hendrerit sodales auctor sollicitudin eros diam accumsan, tempor cubilia curae consequat non torquent ultricies rhoncus leo, interdum pretium ante accumsan litora phasellus bibendum. litora ligula augue diam vestibulum ac vel feugiat scelerisque felis, malesuada nisi aliquam interdum tellus neque feugiat eleifend ligula per, vivamus sociosqu purus ut potenti molestie dapibus volutpat. tortor faucibus commodo faucibus egestas libero sit litora, lobortis vel metus in sapien aliquam taciti, mollis accumsan fames scelerisque auctor justo, aptent nostra litora mi turpis pharetra';

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];
  constructor() {
    this.asyncTabs = new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next(this.pokeGenerations);
      }, 1000);
    });
  }

  ngOnInit() { }

  generationChoosed(choise: number) {
    this.generation.fill(false);
    this.generation[choise] = true;
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
    matLabel.style.opacity = '1';
  }
  deactivePokeOption(matTabLabelNumber: number) {
    for (let i = 0; i < this.pokeGenerations.length; i++) {
      if (i !== matTabLabelNumber) {
        const matLabel = document.getElementById(`mat-tab-label-0-${i}`);
        matLabel.style.textAlign = 'center';
        matLabel.style.font = '10px/13px Roboto';
        matLabel.style.fontWeight = 'normal';
        matLabel.style.letterSpacing = '1.25px';
        matLabel.style.color = '#999999';
        matLabel.style.background = '#EEEEEE 0% 0% no-repeat padding-box';
        matLabel.style.opacity = '1';
      }
    }
  }
}
