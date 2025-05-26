import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerscartComponent } from './beerscart.component';

describe('BeerscartComponent', () => {
  let component: BeerscartComponent;
  let fixture: ComponentFixture<BeerscartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeerscartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeerscartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
