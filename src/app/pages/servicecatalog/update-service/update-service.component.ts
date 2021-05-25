import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ServiceCatalog } from 'src/app/shared/models/servicecatalog.model';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss']
})
export class UpdateServiceComponent implements OnInit {
  @Input() servicecatalog?: ServiceCatalog;
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    description: new FormControl(''),
    href: new FormControl(''),
    lastUpdate: new FormControl(''),
    lifecycleStatus: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    relatedparty: new FormControl(''),
    validForStart: new FormControl(''),
    validForEnd: new FormControl(''),
    version: new FormControl('')
  });

  constructor(private service: FbBaseService<ServiceCatalog>,public dialogRef: MatDialogRef<UpdateServiceComponent>) { }

  ngOnInit(): void {
  }

}
