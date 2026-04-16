import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {

  isDark = false;

  toggleDarkTheme(renderer: Renderer2) {
    this.isDark = !this.isDark;

    if (this.isDark) {
      renderer.removeClass(document.body, 'light-theme');
      renderer.addClass(document.body, 'dark-theme');
    } else {
      renderer.removeClass(document.body, 'dark-theme');
      renderer.addClass(document.body, 'light-theme');
    }
  }
}
