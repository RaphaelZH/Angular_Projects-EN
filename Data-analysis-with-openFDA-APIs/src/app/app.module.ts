import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { AdverseEventsComponent } from './adverse-events/adverse-events.component';
import { DrugsFdaComponent } from './drugs-fda/drugs-fda.component';

import { AdverseEventsService } from './drug_api_endpoints/adverse_events.service';
import { DrugsFdaService } from './drug_api_endpoints/drugs_fda.service';

@NgModule({
  declarations: [
    AppComponent,
    AdverseEventsComponent,
    DrugsFdaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [
    AdverseEventsService,
    DrugsFdaService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
