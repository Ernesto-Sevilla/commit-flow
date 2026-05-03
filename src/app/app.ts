import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommitForm } from "./features/commit-form/commit-form";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommitForm, TranslateModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('commit-flow');
}
