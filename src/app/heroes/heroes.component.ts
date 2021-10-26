import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from 'src/app/mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(event: Hero): void {
    this.selectedHero = event
  }

}
