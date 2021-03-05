import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatCardModule } from '@angular/material/card';

import { MatSelectModule } from '@angular/material/select';


import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatCardModule,
        MatSelectModule,

        MatSliderModule,
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatCardModule,
        MatSelectModule,

        MatSliderModule,
    ]
})

export class MaterialModule {}