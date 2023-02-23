import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentHomeComponent } from './establishment-home.component';

describe('EstablishmentHomeComponent', () => {
  let component: EstablishmentHomeComponent;
  let fixture: ComponentFixture<EstablishmentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstablishmentHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstablishmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
