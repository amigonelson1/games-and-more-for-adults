import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponenteComponent } from './index-componente.component';

describe('IndexComponenteComponent', () => {
  let component: IndexComponenteComponent;
  let fixture: ComponentFixture<IndexComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexComponenteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
