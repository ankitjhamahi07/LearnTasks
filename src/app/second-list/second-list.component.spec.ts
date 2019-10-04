import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondListComponent } from './second-list.component';

describe('SecondListComponent', () => {
  let component: SecondListComponent;
  let fixture: ComponentFixture<SecondListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
