import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente2Component } from './componente2/componente2.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Componente2Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'componente2',
      component: Componente2Component
    }])
  ]
})
export class Modulo2Module { }
