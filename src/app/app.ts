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

  /**
   * Reference to the translation service for global language management.
   * Injected using Angular's modern 'inject' function.
   */
  public translate = inject(TranslateService);

  /**
   * Initializes the application's internationalization settings.
   * Defines available languages and sets the default initial language.
   */
  public activeLang: string = '';

  /**
   * Initializes the application's internationalization settings.
   * Defines available languages and sets the default initial language.
   */
  constructor() {
    const userLang = 'es';
    this.translate.addLangs(['es', 'en']);
    this.translate.use(userLang);

    this.activeLang = this.translate.getCurrentLang() || 'es';
  }

  /**
   * Switches the global application language and triggers a reactivity update.
   * The .subscribe() is crucial to ensure Angular detects the change 
   * and updates the view and child components.
   * 
   * @param lang The language code to activate (e.g., 'es', 'en')
   */
  switchLanguage(lang: string) {
    this.translate.use(lang).subscribe(() => {
      // Sync local state only after the translation is successfully loaded
      this.activeLang = lang;
    });
  }
}
