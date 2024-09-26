import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigiComponent } from './gigi.component';

describe('GigiComponent', () => {
  let component: GigiComponent;
  let fixture: ComponentFixture<GigiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
