import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassgroupDetailsComponent } from './classgroup-details.component';

describe('ClassgroupDetailsComponent', () => {
  let component: ClassgroupDetailsComponent;
  let fixture: ComponentFixture<ClassgroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassgroupDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassgroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
