import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigiHorizontalImgCardComponent } from './gigi-horizontal-img-card.component';

describe('GigiHorizontalImgCardComponent', () => {
  let component: GigiHorizontalImgCardComponent;
  let fixture: ComponentFixture<GigiHorizontalImgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigiHorizontalImgCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigiHorizontalImgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
