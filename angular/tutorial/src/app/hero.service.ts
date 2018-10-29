import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
            .pipe(
              tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
              catchError(this.handleError<Hero>('addHero'))
            );
  }
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url)
            .pipe(
              tap(_ => this.log(`deleted hero id=${id}`)),
              catchError(this.handleError<Hero>('deleteHero'))
            );
  }
  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched Heroes');
    return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
              tap(heroes => this.log('fetched heroes')),
              catchError(this.handleError('getHeroes', []))
            );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    // this.messageService.add(`Search hero by id = ${id}`);
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`HeroService = ${message}`);
  }

  constructor(private http: HttpClient,
    private messageService: MessageService) { }
}
