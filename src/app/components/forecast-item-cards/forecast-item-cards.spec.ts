import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastItemCards } from './forecast-item-cards';

describe('ForecastItemCards', () => {
  let component: ForecastItemCards;
  let fixture: ComponentFixture<ForecastItemCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastItemCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastItemCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
