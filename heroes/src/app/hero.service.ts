import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // sending a message to confirm heroes have been fetched
    this.messageService.add('HeroService: fetched heroes')
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // send message after fetching hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
  
  constructor(private messageService: MessageService) { }
}
