import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashComponent } from './splash.component';
import { SplashRoutingModule } from './splash-routing.module';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SplashComponent],
  imports: [
    CommonModule,
    SplashRoutingModule,
    MatCardModule,
    MatRippleModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  
})
export class SplashModule { }
