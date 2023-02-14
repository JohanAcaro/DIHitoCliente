import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../data-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {

  // Variables para el formulario
  form: FormGroup;
  sending = false;
  sent = false;
  sendError = false;
  sent2 = false;
  sendError2 = false;

  // Constructor para inicializar el formulario
  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      casa: ['', Validators.required],
      edad: ['', Validators.required],
      titulo: ['', Validators.required]
    });
  }

  ngOnInit() {}

  // Método para enviar datos como objeto al servidor
  enviarDatos() {
    if (this.form.valid) {
      this.sending = true;
      this.dataService.postData(this.form.value).subscribe(() => {
        this.sending = false;
        this.sent = true;
        this.form.reset();
      }, () => {
        this.sending = false;
        this.sendError = true;
      });
    }
  }

  // Método para actualizar datos como objeto al servidor
  actualizarDatos() {
    if (this.form.valid) {
      this.sending = true;
      this.dataService.putData(this.form.value).subscribe(() => {
        this.sending = false;
        this.sent2 = true;
        this.form.reset();
      }, () => {
        this.sending = false;
        this.sendError2 = true;
      });
    }
  }
  

}
