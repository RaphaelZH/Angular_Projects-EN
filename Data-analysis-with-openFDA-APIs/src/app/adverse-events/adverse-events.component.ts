import { Component, OnInit, Output, EventEmitter } from '@angular/core';
/* import { NgForm } from '@angular/forms'; */
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import {
  expand,
  scan,
  map,
  share,
  shareReplay,
  debounceTime,
} from 'rxjs/operators';
/*
  https://rxjs.dev/api/operators
    map: Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
*/

import { flatten, uniq } from 'lodash';

import { AdverseEventsService } from '../drug_api_endpoints/adverse_events.service';

@Component({
  selector: 'app-adverse-events',
  templateUrl: './adverse-events.component.html',
  styleUrls: ['./adverse-events.component.css'],
})
export class AdverseEventsComponent implements OnInit {
  results_1$: Observable<any[]>;
  results_1_time$: Observable<any[]>;
  results_1_count$: Observable<any[]>;

  constructor(private adverse_eventsService: AdverseEventsService) {}

  ngOnInit() {
    this.results_1$ = this.adverse_eventsService.loadResults_1();

    this.results_1_time$ = this.results_1$.pipe(
      map((data) => {
        return data.map((data) => data.term);
      }),
      share()
    );

    this.results_1_count$ = this.results_1$.pipe(
      map((data) => {
        return data.map((data) => data.count);
      }),
      share()
    );
  }
}
