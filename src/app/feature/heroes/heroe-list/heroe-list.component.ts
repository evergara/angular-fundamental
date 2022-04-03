import { Component, OnInit } from '@angular/core';
import { Heroe } from '../model/heroe';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.scss'],
})
export class HeroeListComponent implements OnInit {
  private _heroes: Heroe[];
  private _heroes_copy: Heroe[];

  constructor(private heroesService: HeroesService) {
    this._heroes = [];
    this._heroes_copy = [];
  }

  ngOnInit(): void {
    this.getAllHeroes();
  }

  get heroesCopy(): Heroe[] {
    return this._heroes_copy;
  }

  get heroes(): Heroe[] {
    return this._heroes;
  }

  set heroes(heroes: Heroe[]) {
    this._heroes = heroes;
  }

  private getAllHeroes(): void {
    this.heroes = this.heroesService.all();
  }

  deleteHeroe(): void {
    let heroe: Heroe | undefined;

    heroe = this._heroes.shift();
    if (heroe != undefined) {
      this._heroes_copy.push(heroe);
    }
  }

  restaurarHeroe(): void {
    this._heroes = this._heroes_copy;
    this._heroes_copy = [];
  }

  private addHeroeToCopy(heroe: Heroe): void {
    this._heroes_copy.push(heroe);
  }
}
