import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigiDropdownComponent } from './gigi-dropdown.component';

describe('GigiDropdownComponent', () => {
  let component: GigiDropdownComponent;
  let fixture: ComponentFixture<GigiDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigiDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigiDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
