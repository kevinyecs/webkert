import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicecatalogComponent } from './add-servicecatalog.component';

describe('AddServicecatalogComponent', () => {
  let component: AddServicecatalogComponent;
  let fixture: ComponentFixture<AddServicecatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServicecatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
