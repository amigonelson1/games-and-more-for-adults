import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenceriaComponent } from './lenceria.component';

describe('LenceriaComponent', () => {
  let component: LenceriaComponent;
  let fixture: ComponentFixture<LenceriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenceriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LenceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
