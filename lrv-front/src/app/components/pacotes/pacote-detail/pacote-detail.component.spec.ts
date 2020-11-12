import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoteDetailComponent } from './pacote-detail.component';

describe('PacoteDetailComponent', () => {
  let component: PacoteDetailComponent;
  let fixture: ComponentFixture<PacoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
