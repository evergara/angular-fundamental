import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.scss'],
})
export class HeroesSearchComponent implements OnInit {
  term: string;
  heroes: Heroe[];
  heroeSelected!: Heroe | undefined;

  constructor(private heroeService: HeroesService) {
    this.term = '';
    this.heroes = [];
  }

  ngOnInit(): void {}

  displayHero(heroe: Heroe): string {
    return heroe && heroe.superhero ? heroe.superhero : '';
  }

  search(): void {
    this.heroes = [];
    this.heroeSelected = undefined;
    this.heroeService.heroesSearch(this.term.trim() || '').subscribe((heroes) => {
      this.heroes = heroes;
    });

    
  }

  optionSelected1(event: MatAutocompleteSelectedEvent): void {
    const heroe: Heroe = event.option.value;
    this.term = heroe.superhero;
    if (heroe) {
      this.heroeService.heroeById(heroe.id || '').subscribe((heroe) => {
        this.heroeSelected = heroe;
      });
    }
  }

  optionSelected(event: MatAutocompleteSelectedEvent): void {

    if(!event.option.value){
      this.heroeSelected = undefined;
      this.term = '';
      return;
    }
 
    this.heroeService.heroeById(event.option.value.id).subscribe((heroe) => {
      this.heroeSelected = heroe;
    });
  
  }
}
