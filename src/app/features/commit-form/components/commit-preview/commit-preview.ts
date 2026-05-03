import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-commit-preview',
  imports: [],
  templateUrl: './commit-preview.html',
  styleUrl: './commit-preview.scss',
})
export class CommitPreview {

  @Input() type: string = '';
  @Input() scope: string = '';
  @Input() subject: string = '';
  @Input() body: string = '';
  @Input() footer: string = '';
  @Input() isDetailMode: boolean = false;

  copyToClipboard(): void {
    let fullCommand = `git commit -m "${this.type}${this.scope.trim() ? '(' + this.scope.trim() + ')' : ''}: ${this.subject.trim()}"`;

    if (this.isDetailMode && this.body.trim()) {
      fullCommand += ` -m "${this.body.trim()}"`;
    }

    if (this.isDetailMode && this.footer.trim()) {
      fullCommand += ` -m "${this.footer.trim()}"`;
    }

    navigator.clipboard.writeText(fullCommand).then(() => {
      alert("¡Comando copiado con éxito! 🚀");
    });
  }
}
