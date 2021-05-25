import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServicecatalogComponent } from './list-servicecatalog.component';

describe('ListServicecatalogComponent', () => {
  let component: ListServicecatalogComponent;
  let fixture: ComponentFixture<ListServicecatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServicecatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServicecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
