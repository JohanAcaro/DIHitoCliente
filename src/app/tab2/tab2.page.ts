import { Component } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getRaiz().subscribe(data => {
      console.log(data);
    });
  }

}
