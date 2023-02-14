import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FormularioComponent, TablaComponent],
  imports: [
    CommonModule
  ], exports: [FormularioComponent, TablaComponent]
})
export class ComponentsModule { }
