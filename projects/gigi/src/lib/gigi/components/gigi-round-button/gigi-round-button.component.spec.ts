import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigiRoundButtonComponent } from './gigi-round-button.component';

describe('GigiRoundButtonComponent', () => {
  let component: GigiRoundButtonComponent;
  let fixture: ComponentFixture<GigiRoundButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigiRoundButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigiRoundButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
