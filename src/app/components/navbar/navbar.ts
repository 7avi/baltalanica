import { Component, HostListener, signal } from '@angular/core';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-navbar',
  imports: [Icon],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  scrolled = signal(false);
  menuOpen = signal(false);

  readonly links = [
    { label: 'Acasă', href: '#hero' },
    { label: 'Despre', href: '#despre' },
    { label: 'Servicii', href: '#servicii' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Regulament', href: '#regulament' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    this.syncBodyScroll();
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.syncBodyScroll();
  }

  private syncBodyScroll(): void {
    document.body.style.overflow = this.menuOpen() ? 'hidden' : '';
  }
}
