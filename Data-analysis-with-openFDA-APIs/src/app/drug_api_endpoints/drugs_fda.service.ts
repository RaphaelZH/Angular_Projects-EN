import { HttpClient } from '@angular/common/http';

import { DrugsFda } from './drugs_fda.model';

export class DrugsFdaService {

    private availableDrugsFda: DrugsFda[] = [
        { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
        { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
        { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
        { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 },
      ];
    
      getAvailableDrugsFda(){
        return this.availableDrugsFda.slice();
      }
    }
    