import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { SplashRoutingModule } from './splash-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    SplashRoutingModule,
    MatCardModule,
    MatRippleModule
  ],
  
})
export class SplashModule { }
