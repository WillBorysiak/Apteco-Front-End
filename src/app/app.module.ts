import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './services/data.service';
import { HeroComponent } from './components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [AppComponent, HeroComponent, TableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
