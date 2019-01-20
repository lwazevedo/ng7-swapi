import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsViewComponent } from './films-view.component';

describe('FilmsViewComponent', () => {
  let component: FilmsViewComponent;
  let fixture: ComponentFixture<FilmsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
