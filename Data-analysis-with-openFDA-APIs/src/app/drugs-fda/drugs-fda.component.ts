import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { DrugsFda } from '../drug_api_endpoints/drugs_fda.model';
import { DrugsFdaService } from '../drug_api_endpoints/drugs_fda.service';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-drugs-fda',
  templateUrl: './drugs-fda.component.html',
  styleUrls: ['./drugs-fda.component.css']
})
export class DrugsFdaComponent implements OnInit {

  @Output() adverse_events_initial = new EventEmitter<void>();
  drugs_fda: DrugsFda[] = [];

  constructor(private drugs_fda_service: DrugsFdaService) { }

  ngOnInit(): void {
    this.drugs_fda = this.drugs_fda_service.getAvailableDrugsFda();
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}

