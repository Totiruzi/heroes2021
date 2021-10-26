import { MessageService } from './../message.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] = [];
  heroSubscription = Subscription


  constructor(
      private heroService: HeroService,
      private messageService: MessageService
    ) {}

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes(). subscribe(
      heroes => this.heroes = heroes
    )
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Hero Component: selected Hero id = ${ hero.id}`)
  }

}
