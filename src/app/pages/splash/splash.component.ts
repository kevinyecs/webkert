import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ServiceCatalog } from 'src/app/shared/models/servicecatalog.model';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  searchByName = new FormControl('');
  
  serviceCatalogRef: AngularFirestoreCollection<ServiceCatalog>;
  serviceCatalogs: Observable<ServiceCatalog[]> | null = null;
  constructor(private afs : AngularFirestore) {
    this.serviceCatalogRef = this.afs.collection('servicecatalogs', ref => ref.where('name', '>=', 'this.searchByName' ).where('name', '<=',' this.searchByName' + '~').limit(10));
    this.serviceCatalogs = this.serviceCatalogRef.valueChanges();

   }

  ngOnInit(): void {
    console.log(this.searchByName)
  }

}
