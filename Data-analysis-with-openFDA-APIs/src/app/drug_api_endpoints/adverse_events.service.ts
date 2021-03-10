import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

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

@Component({
  selector: 'adverse_events_service',
  templateUrl: './adverse_events.service.html',
  styleUrls: ['./adverse_events.service.css'],
})
@Injectable({
  providedIn: 'root',
})
export class AdverseEventsService {
  baseURL = 'https://api.fda.gov/drug/event.json';

  startdate: string;
  enddate: string;
  api_key: string = null;

  startDate(event: MatDatepickerInputEvent<Date>) {
    const year = `${event.value.getFullYear()}`;
    const month = ('0' + (event.value.getMonth() + 1)).slice(-2);
    const date = ('0' + event.value.getDate()).slice(-2);
    this.startdate = `${year}${month}${date}`;
  }

  endDate(event: MatDatepickerInputEvent<Date>) {
    const year = `${event.value.getFullYear()}`;
    const month = ('0' + (event.value.getMonth() + 1)).slice(-2);
    const date = ('0' + event.value.getDate()).slice(-2);
    this.enddate = `${year}${month}${date}`;
  }

  time_1 = '20020202';
  time_2 = '20101010';

  constructor(private httpClient: HttpClient) {}

  

  //${this.startdate}+TO+${this.enddate}
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

  maxDate;

  ngOnInit() {
    this.loadResults_1();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 0);
  }

  saleData = [
    { 'name': "NAUSEA", 'value': 105000 },
    { 'name': "Laptop", 'value': 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];
  
}
