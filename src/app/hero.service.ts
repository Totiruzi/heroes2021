import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from 'src/app/message.service';
import { HEROES } from 'src/app/mock-heroes';
import { Hero } from 'src/app/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError('getHeroes', []))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    }
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id === id)!;
    this.messageService.add(`HeroService fetched hero with id = ${id}`);
    return of(hero)
  }

  // log a HeroService message with the MessageService
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
