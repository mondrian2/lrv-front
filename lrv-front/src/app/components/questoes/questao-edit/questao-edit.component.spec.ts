import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoEditComponent } from './questao-edit.component';

describe('QuestaoEditComponent', () => {
  let component: QuestaoEditComponent;
  let fixture: ComponentFixture<QuestaoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestaoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
