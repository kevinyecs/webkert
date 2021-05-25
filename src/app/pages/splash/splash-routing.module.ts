import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './splash.component';


const routes: Routes = [
  {
      path: '',
      component: SplashComponent,
      data: { title: 'Főoldal - Service Catalog' }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SplashRoutingModule { }
