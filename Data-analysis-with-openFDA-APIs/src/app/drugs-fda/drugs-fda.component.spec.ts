import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugsFdaComponent } from './drugs-fda.component';

describe('DrugsFdaComponent', () => {
  let component: DrugsFdaComponent;
  let fixture: ComponentFixture<DrugsFdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugsFdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugsFdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
