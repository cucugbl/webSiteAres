import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SociosAcademicosComponent } from './socios-academicos.component';

describe('SociosAcademicosComponent', () => {
  let component: SociosAcademicosComponent;
  let fixture: ComponentFixture<SociosAcademicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SociosAcademicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SociosAcademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
