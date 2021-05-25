import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ServiceCatalog } from 'src/app/shared/models/servicecatalog.model';
import { UpdateServiceComponent } from '../update-service/update-service.component';

@Component({
  selector: 'app-card-servicecatalog',
  templateUrl: './card-servicecatalog.component.html',
  styleUrls: ['./card-servicecatalog.component.scss']
})
export class CardServicecatalogComponent implements OnInit {
  @Input() servicecatalog?: ServiceCatalog;
  constructor(private service: FbBaseService<ServiceCatalog>, private dialog: MatDialog) { }


  
  ngOnInit(): void {
  }
  openUpdateDialog(_currentId: any): void{
    const dialogRef = this.dialog.open(UpdateServiceComponent,{data:this.servicecatalog});
    dialogRef.afterClosed().subscribe((servicecatalog)=>{
  
      let start = servicecatalog.validForStart;
      let end = servicecatalog.validForEnd;
      servicecatalog.validFor = [start, end];
      delete servicecatalog.validForStart ;
      delete servicecatalog.validForEnd ;

      if(servicecatalog?.name){
        console.log(servicecatalog?.name)
        console.log(_currentId)
        this.service.update('servicecatalogs', _currentId,servicecatalog);
      }

    }, err => {
      console.warn(err);
    }
    )

   }
   deleteService(_currentId: any): void{
        this.service.delete('servicecatalogs', _currentId);
    }
    

   

}
