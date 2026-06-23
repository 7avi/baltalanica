import { Component } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';
import { Icon } from '../../icon/icon';

interface Offering {
  image: string;
  title: string;
  description: string;
  features: string[];
  price?: string;
  priceNote?: string;
  priceOptions?: { label: string; price: string }[];
  featured?: boolean;
}

interface Facility {
  icon: 'flame' | 'parking' | 'fridge' | 'leaf';
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [RevealDirective, Icon],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  readonly offerings: Offering[] = [
    {
      image: '/images/fishing_catch.png',
      title: 'Pescuit Sportiv',
      description: 'Bucură-te de o partidă relaxantă de pescuit sportiv pe o baltă curată și bine populată.',
      features: [
        'Acces zilnic între 06:00 și 20:00',
        'Retenție maximă permisă: 5 kg',
        'Specii permise: Caras, Roșioară, Plătică',
        'Crapul se eliberează obligatoriu',
        'Acces gratuit la grătare și foișoare comune',
      ],
      priceOptions: [
        { label: 'Pescar individual', price: '70 lei / zi' },
        { label: 'Familie (2 adulți + copii)', price: '120 lei / zi' },
      ],
    },
    {
      image: '/images/wooden_cabin.png',
      title: 'Cazare Cabană cu Baie Proprie',
      description: 'O căsuță rustică confortabilă din lemn, ideală pentru pescari sau familii care vor să înnopteze pe malul apei.',
      features: [
        'Baie privată în interior',
        '2 paturi confortabile',
        'Foișor și grătar dedicat în curte',
        'Wi-Fi gratuit & Televizor',
        'Încălzire inclusă',
        'Include acces complet la pescuit sportiv',
      ],
      price: '180 lei',
      priceNote: 'pe zi',
      featured: true,
    },
  ];

  readonly facilities: Facility[] = [
    {
      icon: 'flame',
      title: 'Grătare & Ceaune',
      description: 'Locuri special amenajate pe malul apei pentru grătar în aer liber, cu grătare din metal incluse.',
    },
    {
      icon: 'parking',
      title: 'Parcare Supravegheată',
      description: 'Parcare spațioasă, gratuită și monitorizată video 24/7 pentru siguranța mașinii tale.',
    },
    {
      icon: 'fridge',
      title: 'Vitrină Frigorifică',
      description: 'Pentru păstrarea la rece a băuturilor și a peștelui capturat pe tot parcursul zilei.',
    },
    {
      icon: 'leaf',
      title: 'Foișoare din Lemn',
      description: 'Foișoare spațioase acoperite, amplasate convenabil pentru a-ți oferi umbră și confort.',
    },
  ];
}
