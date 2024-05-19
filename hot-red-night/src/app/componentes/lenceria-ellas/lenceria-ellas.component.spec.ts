import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenceriaEllasComponent } from './lenceria-ellas.component';

describe('LenceriaEllasComponent', () => {
  let component: LenceriaEllasComponent;
  let fixture: ComponentFixture<LenceriaEllasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenceriaEllasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LenceriaEllasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
