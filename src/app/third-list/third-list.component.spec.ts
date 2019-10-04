import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdListComponent } from './third-list.component';

describe('ThirdListComponent', () => {
  let component: ThirdListComponent;
  let fixture: ComponentFixture<ThirdListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
