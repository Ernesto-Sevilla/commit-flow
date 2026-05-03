import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitHeader } from './commit-header';

describe('CommitHeader', () => {
  let component: CommitHeader;
  let fixture: ComponentFixture<CommitHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
