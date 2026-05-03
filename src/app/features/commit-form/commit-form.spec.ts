import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitForm } from './commit-form';

describe('CommitForm', () => {
  let component: CommitForm;
  let fixture: ComponentFixture<CommitForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
