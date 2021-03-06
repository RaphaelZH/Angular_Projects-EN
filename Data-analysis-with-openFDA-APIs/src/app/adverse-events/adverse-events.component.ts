import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/* import { NgForm } from '@angular/forms'; */
import { HttpClient, HttpParams } from '@angular/common/http';

import { /* BehaviorSubject, combineLatest */ Observable, EMPTY } from 'rxjs';
import { expand, scan, share, debounceTime, map } from 'rxjs/operators';
/*
  https://rxjs.dev/api/index
    Observable: A representation of any set of values over any amount of time. This is the most basic building block of RxJS.
    EMPTY: The same Observable instance returned by any call to empty without a scheduler. It is preferrable to use this over empty()
  
  https://rxjs.dev/api/operators
    expand: Recursively projects each source value to an Observable which is merged in the output Observable.
    scan: Applies an accumulator function over the source Observable, and returns each intermediate result, with an optional seed value.
    share: Returns a new Observable that multicasts (shares) the original Observable.
*/

import { flatten, uniq } from 'lodash';

import {
  AdverseEvents,
  Results_1,
  ApiResponses_1,
} from '../drug_api_endpoints/adverse_events.model';
import { AdverseEventsService } from '../drug_api_endpoints/adverse_events.service';

@Component({
  selector: 'app-adverse-events',
  templateUrl: './adverse-events.component.html',
  styleUrls: ['./adverse-events.component.css'],
})
export class AdverseEventsComponent implements OnInit {
  baseURL = 'https://api.fda.gov/drug/event.json';

  time_1 = '20040101';
  time_2 = '20210306';

  results_1$: Observable<Results_1[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const params = new HttpParams()
      .set('search', `receivedate:[${this.time_1}+TO+${this.time_2}]`)
      .set('count', 'receivedate');
    this.results_1$ = this.httpClient
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
