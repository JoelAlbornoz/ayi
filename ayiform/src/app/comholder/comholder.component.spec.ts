import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComholderComponent } from './comholder.component';

describe('ComholderComponent', () => {
  let component: ComholderComponent;
  let fixture: ComponentFixture<ComholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
