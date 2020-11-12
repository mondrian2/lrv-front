import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoteEditComponent } from './pacote-edit.component';

describe('PacoteEditComponent', () => {
  let component: PacoteEditComponent;
  let fixture: ComponentFixture<PacoteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacoteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacoteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
