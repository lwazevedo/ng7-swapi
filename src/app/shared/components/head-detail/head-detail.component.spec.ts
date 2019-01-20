import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadDetailComponent } from './head-detail.component';

describe('HeadDetailComponent', () => {
  let component: HeadDetailComponent;
  let fixture: ComponentFixture<HeadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
