import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeDefaultComponetComponent } from './some-default-componet.component';

describe('SomeDefaultComponetComponent', () => {
  let component: SomeDefaultComponetComponent;
  let fixture: ComponentFixture<SomeDefaultComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeDefaultComponetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomeDefaultComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
