import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-about',
  imports: [RevealDirective, Icon],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly features: { icon: 'fish' | 'leaf' | 'map-pin' | 'handshake'; title: string; text: string }[] = [
    { icon: 'fish', title: 'Pește variat', text: 'Caras, roșioară, plătică și crap într-un mediu natural curat și bine întreținut.' },
    { icon: 'leaf', title: 'Cadru natural', text: 'O baltă presărată cu nuferi, ideală pentru relaxare și deconectare.' },
    { icon: 'map-pin', title: 'Zone amenajate', text: 'Locuri de pescuit îngrijite, cu acces ușor și facilități la îndemână.' },
    { icon: 'handshake', title: 'Atmosferă primitoare', text: 'Un loc deschis pentru pescari, familii și pasionați de natură.' },
  ];
}
