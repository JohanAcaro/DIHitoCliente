import { Component } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private dataService: DataService) {}
  
  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
  }

}
