import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data-analysis-with-openFDA-APIs';

  constructor() {

  }

  onOnInit() {

  }
  onSubmit(form: NgForm) {
    console.log(form);
  }
}
