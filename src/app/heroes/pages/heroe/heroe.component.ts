import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getIdHeroe();
  }

  getIdHeroe(): void{
    const id =this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id);
  }
}
