import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-service.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {

    // Variables
    personajes: any;

    
    // Constructor para inicializar DataService y FormBuilder
    constructor(
      private dataService: DataService,
      public formBuilder: FormBuilder
    ) {}
    
    // Método para obtener datos del servidor
    ngOnInit() {
      this.dataService.getData().subscribe(data => {
        this.personajes = data;
      });
    }

    // Método para eliminar datos del servidor
    eliminar(id: number) {
      this.dataService.deleteData(id).subscribe(() => {
        this.dataService.getData().subscribe(data => {
          this.personajes = data;
        });
      });
    }



}
