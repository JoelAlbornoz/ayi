import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabinpComponent } from './labinp.component';

describe('LabinpComponent', () => {
  let component: LabinpComponent;
  let fixture: ComponentFixture<LabinpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabinpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabinpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
