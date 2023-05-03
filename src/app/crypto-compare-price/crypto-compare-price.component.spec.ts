import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoComparePriceComponent } from './crypto-compare-price.component';

describe('CryptoComparePriceComponent', () => {
  let component: CryptoComparePriceComponent;
  let fixture: ComponentFixture<CryptoComparePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoComparePriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptoComparePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
