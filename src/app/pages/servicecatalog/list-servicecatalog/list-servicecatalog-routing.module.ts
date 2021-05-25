import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from '../../splash/splash.component';
import { ListServicecatalogComponent } from './list-servicecatalog.component';
const routes: Routes =[
  {
    path: '',
    component: ListServicecatalogComponent,
    data: {title: 'Főoldal'}
  }
  
]


@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ListServicecatalogRoutingModule { }
