import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSwitchmapComponent } from './filter-switchmap.component';

describe('FilterSwitchmapComponent', () => {
  let component: FilterSwitchmapComponent;
  let fixture: ComponentFixture<FilterSwitchmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSwitchmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSwitchmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
