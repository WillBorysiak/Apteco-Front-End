import {
  Component,
  Input,
  OnInit,
  ViewChild
  } from '@angular/core';
import { DataInterface } from 'src/app/models/data-model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'data-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent implements OnInit {
  // Variables
  @Input() data!: DataInterface;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<DataInterface>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.displayedColumns = ['Country', ...this.getYears()];
    this.createTableData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Data Functions

  getYears() {
    const yearsArray =
      this.data.dimensionResults[1].headerDescriptions.split('\t');
    return yearsArray;
  }

  createTableData() {
    // Years Array
    const years = this.getYears();

    // Countries Array
    const countries = this.data.dimensionResults[0].headerDescriptions
      .split('\t')
      .map((country) => {
        return { Country: country } as any;
      });

    // Travel Data Array
    const travelData = this.data.measureResults[0].rows.map((row) => {
      return row.split('\t');
    });

    // Data Source Calculation

    // This puts all of the above data into a format that the Material table will accept.
    // First loop over the travel data and get the rows and index.
    travelData.forEach((row, yearIndex) => {
      // Every loop you get each year thats related to the data.
      const year = years[yearIndex];
      // Loop over each row of values
      row.forEach((value, index) => {
        // Using the index you go into each country and then the year and add the value as a number.
        countries[index][year] = +value;
      });
    });
    this.dataSource.data = countries;
  }
}
