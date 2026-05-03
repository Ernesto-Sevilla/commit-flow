import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitPreview } from './commit-preview';

describe('CommitPreview', () => {
  let component: CommitPreview;
  let fixture: ComponentFixture<CommitPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitPreview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitPreview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
