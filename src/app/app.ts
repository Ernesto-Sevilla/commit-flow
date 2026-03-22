import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommitForm } from "./component/commit-form/commit-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommitForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('commit-flow');
}
