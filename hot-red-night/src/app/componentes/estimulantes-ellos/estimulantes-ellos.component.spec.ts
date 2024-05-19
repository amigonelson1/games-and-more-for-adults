import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimulantesEllosComponent } from './estimulantes-ellos.component';

describe('EstimulantesEllosComponent', () => {
  let component: EstimulantesEllosComponent;
  let fixture: ComponentFixture<EstimulantesEllosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimulantesEllosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstimulantesEllosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
