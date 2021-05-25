import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ServiceCatalog } from 'src/app/shared/models/servicecatalog.model';
import { AddServicecatalogComponent } from '../add-servicecatalog/add-servicecatalog.component';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { UpdateServiceComponent } from '../update-service/update-service.component';

@Component({
  selector: 'app-list-servicecatalog',
  templateUrl: './list-servicecatalog.component.html',
  styleUrls: ['./list-servicecatalog.component.scss']
})
export class ListServicecatalogComponent implements OnInit {
  title = 'Service Catalogs';
  list: Observable<ServiceCatalog[]> | null = null;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | null = null;
  constructor(private service: FbBaseService<ServiceCatalog>, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      debounceTime(300),
      map(value => this._filter(value))
    );
    
  }
   get(): void{
    this.list = this.service.get('servicecatalogs');
   }
   openDialog(): void{
    const dialogRef = this.dialog.open(AddServicecatalogComponent,{});
    dialogRef.afterClosed().subscribe((servicecatalog)=>{
      console.log(servicecatalog);
      let start = servicecatalog.validForStart;
      let end = servicecatalog.validForEnd;
      servicecatalog.validFor = [start, end];
      delete servicecatalog.validForStart ;
      delete servicecatalog.validForEnd ;

      if(servicecatalog?.name){
        console.log(servicecatalog?.name)
        this.service.add('servicecatalogs', servicecatalog);
      }

    }, err => {
      console.warn(err);
    }
    )

   }



   private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}


