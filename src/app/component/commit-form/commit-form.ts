import { Component } from '@angular/core';

@Component({
  selector: 'app-commit-form',
  imports: [],
  templateUrl: './commit-form.html',
  styleUrl: './commit-form.scss',
})
export class CommitForm {
  subject: string = '';
  selectedType: string = 'feat';

  commitTypes: string[] = ['feat', 'fix', 'docs', 'style', 'refactor', 'chore', 'test'];

    onSubjectChange(event: any) {
    this.subject = event.target.value;
  }

  onTypeChange(event: any) {
    this.selectedType = event.target.value;
  }
}
