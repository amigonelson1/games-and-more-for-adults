import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimulantesEllasComponent } from './estimulantes-ellas.component';

describe('EstimulantesEllasComponent', () => {
  let component: EstimulantesEllasComponent;
  let fixture: ComponentFixture<EstimulantesEllasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimulantesEllasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstimulantesEllasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
