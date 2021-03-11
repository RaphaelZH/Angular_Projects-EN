import { Component, OnInit } from '@angular/core';
/* import { NgForm } from '@angular/forms'; */

import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
/*
  https://rxjs.dev/api/operators
    map: Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
*/

import { AdverseEventsService } from '../drug_api_endpoints/adverse_events.service';

@Component({
  selector: 'app-adverse-events',
  templateUrl: './adverse-events.component.html',
  styleUrls: ['./adverse-events.component.css'],
})
export class AdverseEventsComponent implements OnInit {
  results_1$: Observable<any[]>;
  results_1_term$: Observable<any[]>;
  results_1_count$: Observable<any[]>;

  results_1_reform$: Observable<any[]>;

  constructor(private adverse_eventsService: AdverseEventsService) {}

  ngOnInit() {
    this.reloadResults();
  }

  reloadResults() {
    this.results_1$ = this.adverse_eventsService.loadResults_1();

    this.results_1_term$ = this.results_1$.pipe(
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

    this.results_1_reform$ = this.results_1$.pipe(
      map((data) => {
        let newFormats = data.map((data) => {
          return {
            name: data.term,
            value: data.count,
          };
        });
        return newFormats;
      }),
      share()
    );
  }

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  };

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Reaction medical';
  showYAxisLabel = true;
  yAxisLabel = 'Number of cases';

  new_gradient: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
}
