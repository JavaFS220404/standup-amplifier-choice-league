import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceAgeComponent } from './ice-age.component';

describe('IceAgeComponent', () => {
  let component: IceAgeComponent;
  let fixture: ComponentFixture<IceAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
