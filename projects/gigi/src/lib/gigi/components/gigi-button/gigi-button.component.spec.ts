import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigiButtonComponent } from './gigi-button.component';

describe('GigiButtonComponent', () => {
  let component: GigiButtonComponent;
  let fixture: ComponentFixture<GigiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigiButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
