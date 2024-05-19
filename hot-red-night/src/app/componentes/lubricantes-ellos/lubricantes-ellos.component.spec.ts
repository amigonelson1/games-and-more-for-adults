import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LubricantesEllosComponent } from './lubricantes-ellos.component';

describe('LubricantesEllosComponent', () => {
  let component: LubricantesEllosComponent;
  let fixture: ComponentFixture<LubricantesEllosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LubricantesEllosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LubricantesEllosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
