import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFCComponent } from './dynamic-fc.component';

describe('DynamicFCComponent', () => {
  let component: DynamicFCComponent;
  let fixture: ComponentFixture<DynamicFCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
