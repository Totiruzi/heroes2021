import { HEROES } from 'src/app/mock-heroes';
import { Hero } from 'src/app/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES
  }
}
