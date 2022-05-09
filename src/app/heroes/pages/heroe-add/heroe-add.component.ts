import { Component, OnInit } from '@angular/core';
import { Publisher, Heroe, EnumPublisher } from '../../interfaces/heroe';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe-add',
  templateUrl: './heroe-add.component.html',
  styleUrls: ['./heroe-add.component.scss'],
})
export class HeroeAddComponent implements OnInit {
  publisherID: string = '';
  publishers: Publisher[];
  heroe!: Heroe;
  heroeID: string | undefined;
  title: string;
  durationInSeconds = 5;

  constructor(
    private heroeServices: HeroesService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private snackBar: MatSnackBar
  ) {
    this.title = 'Nuevo heroe';
    this.publishers = [];
    this.initHero();
    this.getPublisher();
  }

  ngOnInit(): void {
    if (this.route.url.includes('edit')) {
      this.loadHeroe();
    }
    this.definyTitle();
  }

  definyTitle() {
    this.title = this.heroeID === undefined ? this.title : 'Editando Heroe';
  }

  getPublisher(): void {
    this.heroeServices.publisher().subscribe((publishers) => {
      this.publishers = publishers;
    });
  }

  addHeroe(): void {
    if (this.heroe.superhero === '') return;

    if (this.heroeID === undefined) {
      this.heroeServices.addHeroe(this.heroe).subscribe((heroe) => {
        this.openSnackBar('Registro creado');
        this.route.navigate(['/heroes/edit', heroe.id]);
      });
    } else {
      this.heroeServices.updatedHeroe(this.heroe).subscribe((heroe) => {
        this.openSnackBar('Registro actualizado');
        console.log(heroe);
      });
    }
  }

  initHero(): void {
    this.heroe = {
      superhero: '',
      publisher: EnumPublisher.DCComics,
      alter_ego: '',
      first_appearance: '',
      characters: '',
      alt_img: '',
    };
  }

  loadHeroe(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          this.heroeID = id;
          return this.heroeServices.heroeById(id);
        })
      )
      .subscribe((heroe) => {
        this.heroe = heroe;
      });
  }

  deletecHeroe(): void {
    this.heroeServices.deleteHeroe(this.heroe.id!).subscribe((resp) => {
      this.openSnackBar('Registro eliminado');
      this.route.navigate(['/heroes']);
    });
  }

  openSnackBar(messaage: string): void {
    this.snackBar.open(messaage, 'ok!', {
      duration: this.durationInSeconds * 1000,
    });
  }
}
