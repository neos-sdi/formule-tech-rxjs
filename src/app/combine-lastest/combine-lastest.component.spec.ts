import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombineLastestComponent } from './combine-lastest.component';

describe('CombineLastestComponent', () => {
  let component: CombineLastestComponent;
  let fixture: ComponentFixture<CombineLastestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CombineLastestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombineLastestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
