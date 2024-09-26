import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigiCardComponent } from './gigi-card.component';

describe('GigiCardComponent', () => {
  let component: GigiCardComponent;
  let fixture: ComponentFixture<GigiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigiCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
