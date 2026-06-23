import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

type IconName =
  | 'flame'
  | 'parking'
  | 'cabin'
  | 'fridge'
  | 'clock'
  | 'scale'
  | 'shield'
  | 'fish'
  | 'leaf'
  | 'map-pin'
  | 'handshake'
  | 'wallet'
  | 'target'
  | 'trash'
  | 'ban'
  | 'phone'
  | 'facebook'
  | 'instagram'
  | 'tiktok'
  | 'arrow-right'
  | 'check'
  | 'wifi'
  | 'tv'
  | 'bed'
  | 'bath'
  | 'menu'
  | 'close';

const ICONS: Record<IconName, string> = {
  flame:
    '<path d="M12 2c1.5 3 4.5 4.5 4.5 8.5a4.5 4.5 0 0 1-9 0c0-1.2.4-2 1-2.8C8 9 9 10 9 11.5 9 9 10.5 5 12 2Z"/>',
  parking:
    '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>',
  cabin:
    '<path d="M3 10.5 12 4l9 6.5"/><path d="M5 9.5V20h14V9.5"/><path d="M9 20v-6h6v6"/>',
  fridge:
    '<rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M6 10h12"/><path d="M9 6v1.5"/><path d="M9 13.5V16"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  scale:
    '<path d="M12 3v18"/><path d="M7 8h10"/><path d="M5 8 3 14a3 3 0 0 0 6 0L7 8"/><path d="M17 8l-2 6a3 3 0 0 0 6 0l-2-6"/>',
  shield: '<path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6Z"/><path d="m9 12 2 2 4-4"/>',
  fish:
    '<path d="M3 12c3-4 7-6 12-6 3 0 5 2 6 6-1 4-3 6-6 6-5 0-9-2-12-6Z"/><path d="M3 12c-.5-1.5-.5-3 0-4.5M3 12c-.5 1.5-.5 3 0 4.5"/><circle cx="16" cy="10.5" r="1"/>',
  leaf: '<path d="M5 20c0-9 6-15 15-15 0 9-6 15-15 15Z"/><path d="M5 20C9 13 13 10 18 8"/>',
  'map-pin': '<path d="M12 21c5-5 8-8.5 8-12a8 8 0 1 0-16 0c0 3.5 3 7 8 12Z"/><circle cx="12" cy="9" r="2.5"/>',
  handshake:
    '<path d="m11 17 2 2 4-4 3 3"/><path d="M3 11 8 6l3 3 3-3 6 6"/><path d="m3 11 4 4"/><path d="m13 13-2-2"/>',
  wallet: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10h18"/><circle cx="16.5" cy="13.5" r="1.2"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
  trash: '<path d="M4 7h16"/><path d="M9 7V5h6v2"/><path d="M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/>',
  phone:
    '<path d="M6 3c-1 0-2 1-2 2 0 8 6 14 14 14 1 0 2-1 2-2v-3l-4-1-2 2c-2.5-1.3-4.7-3.5-6-6l2-2-1-4Z"/>',
  facebook: '<path d="M14 9V7c0-1 .5-1.5 1.5-1.5H17V2.5h-2.5C12 2.5 10.5 4 10.5 6.5V9H8v3h2.5v9.5h3.5V12H17l.5-3H14Z"/>',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
  tiktok: '<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  check: '<path d="m5 12 4.5 4.5L19 7"/>',
  wifi: '<path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8 15.5a6 6 0 0 1 8 0"/><path d="M11 18.5a2 2 0 0 1 2 0"/>',
  tv: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M8 21h8"/><path d="M12 18v3"/>',
  bed: '<path d="M3 18V8m18 10v-4a3 3 0 0 0-3-3H3"/><path d="M3 14h18"/><circle cx="7" cy="10.5" r="1.5"/>',
  bath: '<path d="M4 12V6a2 2 0 0 1 4 0v.5"/><path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M7 19l-1 2M18 19l1 2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
};

@Component({
  selector: 'app-icon',
  standalone: true,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      [innerHTML]="svg"
      aria-hidden="true"
    ></svg>
  `,
  styles: [':host{display:inline-flex;line-height:0}'],
})
export class Icon {
  @Input({ required: true }) name!: IconName;
  @Input() size = 24;
  @Input() strokeWidth = 1.6;

  constructor(private sanitizer: DomSanitizer) {}

  get svg(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(ICONS[this.name] ?? '');
  }
}
