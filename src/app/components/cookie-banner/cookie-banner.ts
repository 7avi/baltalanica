import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

const COOKIE_KEY = 'bln_cookie_consent';

@Component({
  selector: 'app-cookie-banner',
  imports: [CommonModule],
  templateUrl: './cookie-banner.html',
  styleUrl: './cookie-banner.scss',
})
export class CookieBanner implements OnInit {
  visible = signal(false);
  showDetails = signal(false);

  ngOnInit() {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // mic delay ca pagina să se încarce mai întâi
      setTimeout(() => this.visible.set(true), 900);
    }
  }

  accept() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    this.visible.set(false);
  }

  decline() {
    localStorage.setItem(COOKIE_KEY, 'declined');
    this.visible.set(false);
  }

  toggleDetails() {
    this.showDetails.update(v => !v);
  }
}
