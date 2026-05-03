import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommitPreview } from './components/commit-preview/commit-preview';
import { CommitDetails } from './components/commit-details/commit-details';
import { CommitHeader } from './components/commit-header/commit-header';

/**
 * Main editor component for CommitFlow.
 * Handles user input and formats it into a Conventional Commit message.
 */ 

  interface CommitType {
    value: string;
    label: string;
    description: string;
  }

@Component({
  selector: 'app-commit-form',
  imports: [FormsModule, CommitPreview, CommitDetails, CommitHeader],
  templateUrl: './commit-form.html',
  styleUrl: './commit-form.scss',
})

export class CommitForm {

  subject: string = '';
  scope: string = '';
  selectedType: string = 'feat';
  body: string = '';
  footer: string = '';
  isDetailMode: boolean = false;

  toggleDetailMode(): void {
    this.isDetailMode = !this.isDetailMode;
    if(!this.isDetailMode){
      this.body = '';
      this.footer = '';
    }
  }
}
;
