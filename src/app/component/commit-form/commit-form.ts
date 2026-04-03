import { Component } from '@angular/core';

/**
 * Main editor component for CommitFlow.
 * Handles user input and formats it into a Conventional Commit message.
 */
@Component({
  selector: 'app-commit-form',
  imports: [],
  templateUrl: './commit-form.html',
  styleUrl: './commit-form.scss',
})
export class CommitForm {
  // Holds the user-provide commit description
  subject: string = '';

  // Default commit type based on Conventional Commits standard
  selectedType: string = 'feat';

  // List of available commit types for the selector
  commitTypes: string[] = ['feat', 'fix', 'docs', 'style', 'refactor', 'chore', 'test'];

    /**
     * Updates the subject whenever the input field changes.
     * @param event The input event containing the new string.
    */
    onSubjectChange(event: any) {
    this.subject = event.target.value;
  }

  /**
   * Updates the selected commit type from the dropdown menu.
  */
  onTypeChange(event: any) {
    this.selectedType = event.target.value;
  }

  copyToClipboard(): void {

    const command = `git commit -m "${this.selectedType}: ${this.subject}"`;
  
    navigator.clipboard.writeText(command).then(() => {
      console.log("Command copied to clipboard");
      alert("¡Copiado al portapapeles");
    }).catch(err => {
      console.error("Could not copy text: ", err);
    })
  }
}

;
