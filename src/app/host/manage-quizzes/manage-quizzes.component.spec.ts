import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageQuizzesComponent } from './manage-quizzes.component';

describe('ManageQuizzesComponent', () => {
  let component: ManageQuizzesComponent;
  let fixture: ComponentFixture<ManageQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageQuizzesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
