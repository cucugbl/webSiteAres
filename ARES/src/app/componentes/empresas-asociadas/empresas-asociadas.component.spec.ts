import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresasAsociadasComponent } from './empresas-asociadas.component';

describe('EmpresasAsociadasComponent', () => {
  let component: EmpresasAsociadasComponent;
  let fixture: ComponentFixture<EmpresasAsociadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpresasAsociadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresasAsociadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
