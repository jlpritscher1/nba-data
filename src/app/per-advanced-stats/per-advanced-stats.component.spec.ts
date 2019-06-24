import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerAdvancedStatsComponent } from './per-advanced-stats.component';

describe('PerAdvancedStatsComponent', () => {
  let component: PerAdvancedStatsComponent;
  let fixture: ComponentFixture<PerAdvancedStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerAdvancedStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerAdvancedStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
