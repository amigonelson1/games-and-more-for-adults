import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubricantesEllasComponent } from './lubricantes-ellas.component';

describe('LubricantesEllasComponent', () => {
  let component: LubricantesEllasComponent;
  let fixture: ComponentFixture<LubricantesEllasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LubricantesEllasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LubricantesEllasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
