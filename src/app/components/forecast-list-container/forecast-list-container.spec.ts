import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastListContainer } from './forecast-list-container';

describe('ForecastListContainer', () => {
  let component: ForecastListContainer;
  let fixture: ComponentFixture<ForecastListContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastListContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
