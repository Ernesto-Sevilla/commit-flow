import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-commit-details',
  imports: [TranslateModule, FormsModule],
  templateUrl: './commit-details.html',
  styleUrl: './commit-details.scss',
})
export class CommitDetails {
  @Input() isDetailMode: boolean = false;
  @Input() body: string = '';
  @Input() footer: string = '';

  // Eventos para avisar al padre cuando algo cambie
  @Output() toggleMode = new EventEmitter<void>();
  @Output() bodyChange = new EventEmitter<string>();
  @Output() footerChange = new EventEmitter<string>();

  onToggle() {
    this.toggleMode.emit();
  }

  onBodyInput(newValue: string) {
    this.bodyChange.emit(newValue);
  }

  onFooterInput(newValue: string) {
    this.footerChange.emit(newValue);
  }
}
