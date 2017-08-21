import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeSortComponent } from './pipe-sort.component';

describe('PipeSortComponent', () => {
  let component: PipeSortComponent;
  let fixture: ComponentFixture<PipeSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
