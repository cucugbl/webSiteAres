import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PruebasComponent } from './pruebas/pruebas.component';
import { InicioComponent } from './componentes/inicio/inicio.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "inicio" },
  {
    path: 'inicio',
    component: InicioComponent,
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
