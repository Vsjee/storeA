import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotFoundDialogComponent } from './product-not-found-dialog.component';

describe('ProductNotFoundDialogComponent', () => {
  let component: ProductNotFoundDialogComponent;
  let fixture: ComponentFixture<ProductNotFoundDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNotFoundDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNotFoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
