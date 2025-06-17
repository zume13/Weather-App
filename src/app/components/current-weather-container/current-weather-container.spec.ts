import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherContainer } from './current-weather-container';

describe('CurrentWeatherContainer', () => {
  let component: CurrentWeatherContainer;
  let fixture: ComponentFixture<CurrentWeatherContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWeatherContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentWeatherContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
