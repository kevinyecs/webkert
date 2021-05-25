import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedpartyComponent } from './relatedparty.component';

describe('RelatedpartyComponent', () => {
  let component: RelatedpartyComponent;
  let fixture: ComponentFixture<RelatedpartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedpartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedpartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
