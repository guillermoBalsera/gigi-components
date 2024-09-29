import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigiImgCardComponent } from './gigi-img-card.component';

describe('GigiImgCardComponent', () => {
  let component: GigiImgCardComponent;
  let fixture: ComponentFixture<GigiImgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigiImgCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigiImgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
