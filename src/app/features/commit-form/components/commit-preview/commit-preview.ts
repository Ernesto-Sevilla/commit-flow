import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-commit-preview',
  imports: [TranslateModule],
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
  @Input() copySuccessMsg: string = '';

  private sanitize(text: string): string {
    if (!text) return '';
    // Replace all double quotes ("") with single quotes (')
    // This prevents the Git command from breaking in the terminal.
    return text.trim().replace(/"/g, "'");
  }

  copyToClipboard(): void {
    const cleanType = this.sanitize(this.type);
    const cleanScope = this.sanitize(this.scope);
    const cleanSubject = this.sanitize(this.subject);
    const cleanBody = this.sanitize(this.body);
    const cleanFooter = this.sanitize(this.footer);

    const scopePart = cleanScope ? `(${cleanScope})` : '';
    let fullCommand = `git commit -m "${cleanType}${scopePart}: ${cleanSubject}"`;

    if (this.isDetailMode) {
      if (cleanBody) {
        fullCommand += ` -m "${cleanBody}"`;
      }
      if (cleanFooter) {
        fullCommand += ` -m "${cleanFooter}"`;
      }
    }

    navigator.clipboard.writeText(fullCommand).then(() => {
      alert(this.copySuccessMsg);
    });
  }
}
