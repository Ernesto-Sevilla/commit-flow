import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommitPreview } from './components/commit-preview/commit-preview';
import { CommitDetails } from './components/commit-details/commit-details';
import { CommitHeader } from './components/commit-header/commit-header';
import { TranslateModule } from '@ngx-translate/core';

interface CommitType {
  value: string;
  label: string;
  description: string;
}

/**
 * Main editor component for CommitFlow.
 * Handles user input and formats it into a Conventional Commit message.
 */
@Component({
  selector: 'app-commit-form',
  imports: [FormsModule, CommitPreview, CommitDetails, CommitHeader, TranslateModule],
  templateUrl: './commit-form.html',
  styleUrl: './commit-form.scss',
})

export class CommitForm {
  // --- Form State ---
  subject: string = '';
  scope: string = '';
  selectedType: string = 'feat';
  body: string = '';
  footer: string = '';
  isDetailMode: boolean = false;

  /** Language currently active in the application, provided by App Root */
  currentLang = input<string>('es');

  /** Event emitted when the user selects a new language */
  onLanguageChange = output<string>();

  /**
   * Notifies the parent component to switch the application language.
   * @param lang The language code (e.g., 'es', 'en')
   */
  changeLang(lang: string): void {
    this.onLanguageChange.emit(lang);
  }

  /**
   * /**
   * Toggles the detail mode (Body/Footer) and resets their values if closed.
   */
  toggleDetailMode(): void {
    this.isDetailMode = !this.isDetailMode;
    if (!this.isDetailMode) {
      this.body = '';
      this.footer = '';
    }
  }
}
