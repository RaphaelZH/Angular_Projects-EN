import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
    imports: [
        MatButtonModule,
        MatInputModule,
        MatSliderModule,
    ],
    exports: [
        MatButtonModule,
        MatInputModule,
        MatSliderModule,
    ]
})

export class MaterialModule {}