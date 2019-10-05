import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente1Component } from './componente1/componente1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [Componente1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'componente1',
      component: Componente1Component
    }])
  ]
})
export class Modulo1Module { }
