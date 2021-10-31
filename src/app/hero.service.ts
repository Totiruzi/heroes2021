import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from 'src/app/message.service';
import { HEROES } from 'src/app/mock-heroes';
import { Hero } from 'src/app/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`HeroService fetched hero with id = ${id}`);
    return of(hero)
  }
}
