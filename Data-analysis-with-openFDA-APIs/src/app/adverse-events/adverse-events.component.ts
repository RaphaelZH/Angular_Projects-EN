import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { AdverseEvents } from '../drug_api_endpoints/adverse_events.model';
import { AdverseEventsService } from '../drug_api_endpoints/adverse_events.service';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adverse-events',
  templateUrl: './adverse-events.component.html',
  styleUrls: ['./adverse-events.component.css']
})

export class AdverseEventsComponent implements OnInit {


constructor() { }

ngOnInit(): void {
}

}
