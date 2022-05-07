import { Component, OnInit } from '@angular/core';
import { Publisher, Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe-add',
  templateUrl: './heroe-add.component.html',
  styleUrls: ['./heroe-add.component.scss'],
})
export class HeroeAddComponent implements OnInit {
  publisherID: string = '';
  publishers: Publisher[];
  heroe!: Heroe;

  constructor(private heroeServices: HeroesService) {
    this.publishers = [];
  }

  ngOnInit(): void {
    this.getPublisher();
  }

  getPublisher(): void {
    this.heroeServices.publisher().subscribe(publishers =>{
      this.publishers = publishers;
    })
  }
}
