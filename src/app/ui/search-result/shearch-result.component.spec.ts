import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShearchResultComponent } from './shearch-result.component';

describe('ShearchResultComponent', () => {
  let component: ShearchResultComponent;
  let fixture: ComponentFixture<ShearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
