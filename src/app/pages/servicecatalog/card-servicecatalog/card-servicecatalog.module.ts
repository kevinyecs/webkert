import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardServicecatalogComponent } from './card-servicecatalog.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CardServicecatalogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [CardServicecatalogComponent]
})
export class CardServicecatalogModule { }
