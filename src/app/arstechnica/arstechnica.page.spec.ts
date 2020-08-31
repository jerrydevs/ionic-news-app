import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArstechnicaPage } from './arstechnica.page';

describe('ArstechnicaPage', () => {
  let component: ArstechnicaPage;
  let fixture: ComponentFixture<ArstechnicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArstechnicaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArstechnicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
