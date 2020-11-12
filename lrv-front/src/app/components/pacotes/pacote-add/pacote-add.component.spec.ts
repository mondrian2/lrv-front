import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoteAddComponent } from './pacote-add.component';

describe('PacoteAddComponent', () => {
  let component: PacoteAddComponent;
  let fixture: ComponentFixture<PacoteAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacoteAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacoteAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
