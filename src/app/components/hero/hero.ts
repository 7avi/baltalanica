import { Component } from '@angular/core';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly stats: { icon: 'clock' | 'scale' | 'shield'; value: string; label: string }[] = [
    { icon: 'clock', value: '06–20', label: 'Program zilnic' },
    { icon: 'scale', value: '5 kg', label: 'Capturi permise' },
    { icon: 'shield', value: '24/7', label: 'Supraveghere' },
  ];
}
