import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RelatedParty } from 'src/app/shared/models/relatedparty.model';
import { Observable } from 'rxjs';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { ServiceCatalog } from 'src/app/shared/models/servicecatalog.model';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-add-servicecatalog',
  templateUrl: './add-servicecatalog.component.html',
  styleUrls: ['./add-servicecatalog.component.scss']
})
export class AddServicecatalogComponent implements OnInit {
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




  constructor(public dialogRef: MatDialogRef<AddServicecatalogComponent>) { }

  ngOnInit(): void {
  }

}
