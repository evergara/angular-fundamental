import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent implements OnInit {
  heroes: Heroe[];

  constructor(private heroesServices: HeroesService) {
    this.heroes = [];
  }

  ngOnInit(): void {
    this.heroesServices.heroes().subscribe(heroes => {
      this.heroes = heroes;
      console.log(this.heroes);
    });
  }
}
