import { Component } from '@angular/core';
import { DataInterface } from './models/data-model';
import { DataService } from 'src/app/services/data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { trigger } from '@angular/animations';
import {
  enterTransitionLayout,
  enterTransitionTable,
} from './animations/animations';

const fadeInLayout = trigger('fadeInlayout', [enterTransitionLayout]);
const fadeInTable = trigger('fadeInTable', [enterTransitionTable]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInLayout, fadeInTable],
})
export class AppComponent {
  data!: DataInterface;

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
