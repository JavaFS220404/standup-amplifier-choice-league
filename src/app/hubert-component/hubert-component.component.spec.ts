import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubertComponentComponent } from './hubert-component.component';

describe('HubertComponentComponent', () => {
  let component: HubertComponentComponent;
  let fixture: ComponentFixture<HubertComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubertComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HubertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
