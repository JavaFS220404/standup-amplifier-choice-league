import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilvanComponentComponent } from './silvan-component.component';

describe('SilvanComponentComponent', () => {
  let component: SilvanComponentComponent;
  let fixture: ComponentFixture<SilvanComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SilvanComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SilvanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
