import { Injectable } from '@angular/core';
import { MessageService } from 'src/app/message.service';
import { Observable, of } from 'rxjs';
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
}
