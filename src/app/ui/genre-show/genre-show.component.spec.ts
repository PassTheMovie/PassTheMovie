import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreShowComponent } from './genre-show.component';

describe('GenreShowComponent', () => {
  let component: GenreShowComponent;
  let fixture: ComponentFixture<GenreShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
