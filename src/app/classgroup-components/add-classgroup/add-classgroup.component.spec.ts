import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassgroupComponent } from './add-classgroup.component';

describe('AddClassgroupComponent', () => {
  let component: AddClassgroupComponent;
  let fixture: ComponentFixture<AddClassgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassgroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
