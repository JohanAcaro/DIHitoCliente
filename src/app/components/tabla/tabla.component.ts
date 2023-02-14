import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data-service.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit {

    personajes: any;
    personajeSeleccionado: any;

    //form : FormGroup;

    constructor(
      private dataService: DataService,
      public formBuilder: FormBuilder
    ) {}

    ngOnInit() {
      this.dataService.getData().subscribe(data => {
        this.personajes = data;
      });
    }

  
    eliminar(id: number) {
      this.dataService.deleteData(id).subscribe(() => {
        this.dataService.getData().subscribe(data => {
          this.personajes = data;
        });
      });
    }



}
