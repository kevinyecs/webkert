import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListServicecatalogComponent } from './list-servicecatalog.component';
import { ListServicecatalogRoutingModule } from './list-servicecatalog-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerModule } from 'src/app/shared/components/container/container.module';
import { CardServicecatalogModule } from '../card-servicecatalog/card-servicecatalog.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddServicecatalogModule } from '../add-servicecatalog/add-servicecatalog.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { UpdateServiceModule } from '../update-service/update-service.module';


@NgModule({
  declarations: [ListServicecatalogComponent],
  imports: [
    CommonModule,
    ListServicecatalogRoutingModule,
    MatToolbarModule,
    ContainerModule,
    CardServicecatalogModule,
    MatButtonModule,
    MatIconModule,
    AddServicecatalogModule,
    MatAutocompleteModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    UpdateServiceModule
    
  ]
})
export class ListServicecatalogModule { }
