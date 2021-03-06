import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadSideBarComponent } from './head-side-bar.component';

describe('HeadSideBarComponent', () => {
  let component: HeadSideBarComponent;
  let fixture: ComponentFixture<HeadSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
