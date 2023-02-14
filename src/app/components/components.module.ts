import { FormularioComponent } from './formulario/formulario.component';
import { TablaComponent } from './tabla/tabla.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormularioComponent, TablaComponent],
  imports: [
    CommonModule, FormsModule, IonicModule, ReactiveFormsModule
  ], exports: [FormularioComponent, TablaComponent]
})
export class ComponentsModule { }
