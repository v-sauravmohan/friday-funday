import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemPointsPageComponent } from './redeem-points-page.component';

describe('RedeemPointsPageComponent', () => {
  let component: RedeemPointsPageComponent;
  let fixture: ComponentFixture<RedeemPointsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemPointsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemPointsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
