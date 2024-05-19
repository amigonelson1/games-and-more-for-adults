import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuguetesEllasComponent } from './juguetes-ellas.component';

describe('JuguetesEllasComponent', () => {
  let component: JuguetesEllasComponent;
  let fixture: ComponentFixture<JuguetesEllasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuguetesEllasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuguetesEllasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
