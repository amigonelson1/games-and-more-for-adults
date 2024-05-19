import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenceriaEllosComponent } from './lenceria-ellos.component';

describe('LenceriaEllosComponent', () => {
  let component: LenceriaEllosComponent;
  let fixture: ComponentFixture<LenceriaEllosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LenceriaEllosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LenceriaEllosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
