import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPeopleButtonComponent } from './load-people-button.component';

describe('LoadPeopleButtonComponent', () => {
  let component: LoadPeopleButtonComponent;
  let fixture: ComponentFixture<LoadPeopleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadPeopleButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPeopleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
