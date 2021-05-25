import { Component } from '@angular/core';
import {CATEGORIES} from 'src/app/shared/db/category.db';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent{
 
 categories = CATEGORIES

 constructor(private router: Router){}

 logout(): void{
   this.router.navigateByUrl('login');
 }
}