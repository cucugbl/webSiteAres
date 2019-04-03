import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselPortadaComponent } from './carrousel-portada.component';

describe('CarrouselPortadaComponent', () => {
  let component: CarrouselPortadaComponent;
  let fixture: ComponentFixture<CarrouselPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrouselPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
