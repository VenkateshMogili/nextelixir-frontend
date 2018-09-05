import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreviewComponent } from './editreview.component';

describe('EditreviewComponent', () => {
  let component: EditreviewComponent;
  let fixture: ComponentFixture<EditreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
