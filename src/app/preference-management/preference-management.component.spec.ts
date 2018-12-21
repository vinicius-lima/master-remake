import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenceManagementComponent } from './preference-management.component';

describe('PreferenceManagementComponent', () => {
  let component: PreferenceManagementComponent;
  let fixture: ComponentFixture<PreferenceManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferenceManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferenceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
