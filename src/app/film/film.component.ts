import { Component, OnInit } from '@angular/core';
import { FILMS } from '../Test_front-end_mobiyo_2018';
import { film_model } from '../film_model';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

	films = FILMS;
	selectedFilm = film_model;
  constructor() { }

  ngOnInit() {

  }

  showDetails(film : Film): void{
  	this.selectedFilm = film;
  }

}
