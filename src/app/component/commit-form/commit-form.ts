import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

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
  imports: [FormsModule],
  templateUrl: './commit-form.html',
  styleUrl: './commit-form.scss',
})

export class CommitForm {

  // Holds the user-provide commit description
  subject: string = '';
  scope: string = '';
  // Default commit type based on Conventional Commits standard
  selectedType: string = 'feat';
  selectedTypeObject: CommitType | null = null;
  body: string = '';
  footer: string = '';

  isDetailMode: boolean = false;

  // List of available commit types for the selector
  commitTypes: CommitType[] = [
    { value: 'feat', label: 'Feature', description: 'Introduce una nueva funcionalidad al código.' },
    { value: 'fix', label: 'Fix', description: 'Corrige un error o fallo técnico (bug).' },
    { value: 'docs', label: 'Documentation', description: 'Cambios solo en la documentación.' },
    { value: 'style', label: 'Style', description: 'Cambios de formato y estética sin afectar la lógica.' },
    { value: 'refactor', label: 'Refactor', description: 'Mejora del código que no corrige errores ni añade funciones.' },
    { value: 'perf', label: 'Performance', description: 'Cambio que mejora el rendimiento del sistema.' },
    { value: 'test', label: 'Test', description: 'Añadir o corregir pruebas unitarias.' },
    { value: 'chore', label: 'Chore', description: 'Mantenimiento, herramientas o actualización de librerías.' }
  ];
    /**
     * Updates the subject whenever the input field changes.
     * @param event The input event containing the new string.
    */
    onSubjectChange(event: any) {
    this.subject = event.target.value;
  }

  onTypesChange(): void {
    const found = this.commitTypes.find(t => t.value === this.selectedType);

    this.selectedTypeObject = found || null;
  }

  toggleDetailMode(): void {
    this.isDetailMode = !this.isDetailMode;

    if(!this.isDetailMode){
      this.body = '';
      this.footer = '';
    }
  }

  copyToClipboard(): void {

    let fullComand = `git commit -m "${this.selectedType}${this.scope.trim() ? '(' + this.scope.trim() + ')' : ''}: ${this.subject.trim()}"`;

    if (this.isDetailMode && this.body.trim()) {
      fullComand += ` -m "${this.body.trim()}"`;
    }

    if (this.isDetailMode && this.footer.trim()) {
      fullComand += ` -m "${this.footer.trim()}"`;
    }
  
    navigator.clipboard.writeText(fullComand).then(() => {
      console.log("Command copied to clipboard", fullComand);
      alert("¡Copiado al portapapeles");
    }).catch(err => {
      console.error("Could not copy text: ", err);
    })
  }
}

;
