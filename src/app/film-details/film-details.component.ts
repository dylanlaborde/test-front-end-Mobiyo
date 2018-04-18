import { Component, OnInit , Input } from '@angular/core';
import { FILMS } from '../Test_front-end_mobiyo_2018';
import { film_model } from '../film_model';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

	@Input() film : film_model;

  constructor() { }

  ngOnInit() {
  }

}
