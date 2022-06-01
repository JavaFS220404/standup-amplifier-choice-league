import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TostartComponent } from './tostart.component';

describe('TostartComponent', () => {
  let component: TostartComponent;
  let fixture: ComponentFixture<TostartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TostartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TostartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
