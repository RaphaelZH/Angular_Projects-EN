import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { expand, scan, share } from 'rxjs/operators';
/*
  https://rxjs.dev/api/index
    Observable: A representation of any set of values over any amount of time. This is the most basic building block of RxJS.
    EMPTY: The same Observable instance returned by any call to empty without a scheduler. It is preferrable to use this over empty()
  
  https://rxjs.dev/api/operators
    expand: Recursively projects each source value to an Observable which is merged in the output Observable.
    scan: Applies an accumulator function over the source Observable, and returns each intermediate result, with an optional seed value.
    share: Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream hot.
*/

import { ApiResponses_1, Results_1 } from './adverse_events.model';

@Injectable({
  providedIn: 'root',
})
export class AdverseEventsService {
  baseURL = 'https://api.fda.gov/drug/event.json';
  api_key = null;
  time_1 = '20040101';
  time_2 = '20210306';
  constructor(private httpClient: HttpClient) {}

  loadResults_1(): Observable<Results_1[]> {
    let params = new HttpParams()
      .set('search', `receivedate:[${this.time_1}+TO+${this.time_2}]`)
      .set('count', 'patient.reaction.reactionmeddrapt.exact');
    if (this.api_key != null) {
      params = params.set('api_key', this.api_key);
    } else {
      params = params;
    }

    return this.httpClient
      .get<ApiResponses_1>(this.baseURL, { params })
      .pipe(
        expand((data) => {
          return data.next
            ? this.httpClient.get<ApiResponses_1>(data.next)
            : EMPTY;
        }),
        scan((acc, data) => {
          return [...acc, ...data.results];
        }, []),
        share()
      );
  }
}
