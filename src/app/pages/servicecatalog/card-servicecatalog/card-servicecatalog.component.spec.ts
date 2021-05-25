import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServicecatalogComponent } from './card-servicecatalog.component';

describe('CardServicecatalogComponent', () => {
  let component: CardServicecatalogComponent;
  let fixture: ComponentFixture<CardServicecatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardServicecatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServicecatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
