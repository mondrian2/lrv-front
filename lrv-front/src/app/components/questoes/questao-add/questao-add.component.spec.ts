import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestaoAddComponent } from './questao-add.component';

describe('QuestaoAddComponent', () => {
  let component: QuestaoAddComponent;
  let fixture: ComponentFixture<QuestaoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestaoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestaoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
