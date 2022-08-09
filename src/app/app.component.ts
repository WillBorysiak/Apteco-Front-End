import { Component } from '@angular/core';
import { DataInterface } from './models/data-model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data!: DataInterface;

  constructor(private dataService: DataService) {}

  getData(): void {
    this.dataService.getData().subscribe((data: DataInterface) => {
      this.data = data;
      return this.data;
    });
  }

  ngOnInit(): void {
    this.getData();
  }
}
