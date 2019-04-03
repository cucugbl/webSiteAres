import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { MDBBootstrapModule } from 'angular-bootstrap-md';
// For MDB Angular Pro
import { NavbarModule, WavesModule } from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebasComponent } from './pruebas/pruebas.component';
import { CarrouselPortadaComponent } from './componentes/carrousel-portada/carrousel-portada.component';
// For MDB Angular Free
import { CollapseModule } from 'angular-bootstrap-md'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ResumenComponent } from './componentes/resumen/resumen.component';
import { ProblemasComponent } from './componentes/problemas/problemas.component';
import { SociosAcademicosComponent } from './componentes/socios-academicos/socios-academicos.component';
import { EmpresasAsociadasComponent } from './componentes/empresas-asociadas/empresas-asociadas.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebasComponent,
    CarrouselPortadaComponent,
    InicioComponent,
    ResumenComponent,
    ProblemasComponent,
    SociosAcademicosComponent,
    EmpresasAsociadasComponent,
    EquipoComponent,
    ContactoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(), NavbarModule, WavesModule, CollapseModule, NgbModule
  ],
  providers: [],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
