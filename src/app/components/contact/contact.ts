import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  readonly phone = '+40 744 289 508';
  readonly phoneHref = 'tel:+40744289508';
  readonly facebookName = 'Sorin Nica';
  readonly facebookUrl = 'https://www.facebook.com/sorin.2018';
  readonly instagramUrl = 'https://www.instagram.com/nicaionutsorin/?utm_source=qr&igsh=MWwyZ3dsOHlrdjRvcg%3D%3D#';
  readonly tiktokUrl = 'https://www.tiktok.com/@baltalanica';
}
