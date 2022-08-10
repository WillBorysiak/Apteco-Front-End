import { Component } from '@angular/core';
import { DataInterface } from './models/data-model';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data!: DataInterface;

  spinnerType!: string;

  constructor(
    private dataService: DataService,
    private spinnerService: NgxSpinnerService
  ) {
    this.spinnerService.show();
  }

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
