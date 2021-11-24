import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRemindersNoteComponent } from './get-reminders-note.component';

describe('GetRemindersNoteComponent', () => {
  let component: GetRemindersNoteComponent;
  let fixture: ComponentFixture<GetRemindersNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRemindersNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRemindersNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
