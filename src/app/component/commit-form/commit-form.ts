import { Component } from '@angular/core';

@Component({
  selector: 'app-commit-form',
  imports: [],
  templateUrl: './commit-form.html',
  styleUrl: './commit-form.scss',
})
export class CommitForm {
  subject: string = '';

  onSubjectChange(event: any) {
    this.subject = event.target.value;
  }
}
