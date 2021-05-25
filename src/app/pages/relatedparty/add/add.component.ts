import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class RelatedPartyAddComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    baseType: new FormControl('', Validators.required),
    refferedType: new FormControl('KEKW'),
    schemaLocation: new FormControl(''),
    type: new FormControl(''),
    href: new FormControl(''),
    name: new FormControl(''),
    role: new FormControl(''),
  });


  constructor(private dialogRef: MatDialogRef<RelatedPartyAddComponent>) { }

  ngOnInit(): void {
  }
  close(){
    if(this.form.valid){
    this.dialogRef.close(this.form.value);
    }
    
  }
}
