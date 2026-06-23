import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-rules',
  imports: [RevealDirective, Icon],
  templateUrl: './rules.html',
  styleUrl: './rules.scss',
})
export class Rules {
  readonly fees = [
    { label: 'Pescar individual', note: 'acces pentru o persoană', price: '70 lei', unit: '/ zi' },
    { label: 'Familie', note: '2 adulți + copii', price: '120 lei', unit: '/ zi' },
  ];

  readonly allowedSpecies = ['Caras', 'Roșioară', 'Plătică'];

  readonly generalRules: { icon: 'trash' | 'flame' | 'fish' | 'ban'; text: string }[] = [
    { icon: 'trash', text: 'Păstrați curățenia în jurul locului de pescuit.' },
    { icon: 'flame', text: 'Grătarul este permis doar în zonele special amenajate.' },
    { icon: 'fish', text: 'Respectați natura și ceilalți pescari.' },
    { icon: 'ban', text: 'Nerespectarea regulamentului duce la evacuare, fără rambursarea taxei.' },
  ];
}
