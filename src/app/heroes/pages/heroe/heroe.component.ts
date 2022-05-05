import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from './../../interfaces/heroe';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {
  private heroeId: string;
  heroe!: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private heroesServices: HeroesService
  ) {
    this.heroeId = '';
  }

  ngOnInit(): void {
    this.getIdHeroe();
    this.heroeById();
  }

  getIdHeroe(): void {
    /** 
    this.activatedRoute.params.
    pipe(
      switchMap(({id}) => this.heroesServices.heroeById(id))
    ).
    subscribe(heroe => {
      this.heroe = heroe;
    });
    */
    this.activatedRoute.params.subscribe(({ id }) => {
      this.heroeId = id;
    });
  }

  heroeById() {
    this.heroesServices.heroeById(this.heroeId).subscribe((heroe) => {
      this.heroe = heroe;
    });
  }

  goBack(): void {
    this.route.navigate(['/heroes/list'])
  }
}
