import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAddedPopupComponent } from './restaurant-added-popup.component';

describe('RestaurantAddedPopupComponent', () => {
  let component: RestaurantAddedPopupComponent;
  let fixture: ComponentFixture<RestaurantAddedPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantAddedPopupComponent]
    });
    fixture = TestBed.createComponent(RestaurantAddedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
