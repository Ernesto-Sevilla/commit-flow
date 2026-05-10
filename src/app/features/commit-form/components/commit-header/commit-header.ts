import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommitType, COMMIT_TYPES } from '../../../../core/models/commit.model';
import { TranslateModule } from '@ngx-translate/core';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-commit-header',
  imports: [TranslateModule, FormsModule, UpperCasePipe],
  templateUrl: './commit-header.html',
  styleUrl: './commit-header.scss',
})
export class CommitHeader {
  @Input() selectedType: string = 'feat';
  @Input() scope: string = '';
  @Input() subject: string = '';

  @Output() typeChange = new EventEmitter<string>();
  @Output() scopeChange = new EventEmitter<string>();
  @Output() subjectChange = new EventEmitter<string>();

  commitTypes = COMMIT_TYPES;
  selectedTypeObject: CommitType | null = null;

  ngOnInit() {
    this.updateTypeObject();
  }

  onTypeChange(value: string) {
    this.selectedType = value;
    this.updateTypeObject();
    this.typeChange.emit(value);
  }

  private updateTypeObject() {
    this.selectedTypeObject = this.commitTypes.find(t => t.value === this.selectedType) || null;
  }
}
