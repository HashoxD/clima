import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarClimaComponent } from './actualizar-clima.component';

describe('ActualizarClimaComponent', () => {
  let component: ActualizarClimaComponent;
  let fixture: ComponentFixture<ActualizarClimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualizarClimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
