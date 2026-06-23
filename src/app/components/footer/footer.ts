import { Component } from '@angular/core';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = new Date().getFullYear();
  readonly links = [
    { label: 'Acasă', href: '#hero' },
    { label: 'Despre', href: '#despre' },
    { label: 'Servicii', href: '#servicii' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Regulament', href: '#regulament' },
    { label: 'Contact', href: '#contact' },
  ];
}
