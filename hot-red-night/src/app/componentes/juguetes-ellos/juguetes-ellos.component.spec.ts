import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuguetesEllosComponent } from './juguetes-ellos.component';

describe('JuguetesEllosComponent', () => {
  let component: JuguetesEllosComponent;
  let fixture: ComponentFixture<JuguetesEllosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuguetesEllosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuguetesEllosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
