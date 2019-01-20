import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipsViewComponent } from './starships-view.component';

describe('StarshipsViewComponent', () => {
  let component: StarshipsViewComponent;
  let fixture: ComponentFixture<StarshipsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarshipsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarshipsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
