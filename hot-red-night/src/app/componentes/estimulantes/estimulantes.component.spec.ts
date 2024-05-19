import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimulantesComponent } from './estimulantes.component';

describe('EstimulantesComponent', () => {
  let component: EstimulantesComponent;
  let fixture: ComponentFixture<EstimulantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimulantesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstimulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
