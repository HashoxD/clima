import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimaComponent } from './clima/clima.component';
import { ActualizarClimaComponent } from './actualizar-clima/actualizar-clima.component';

const routes: Routes = [
  {
    path: '',
    component: ClimaComponent
  },
  {
    path: 'actualizarClima',
    component: ActualizarClimaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
