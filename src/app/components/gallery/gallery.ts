import { Component, computed, signal } from '@angular/core';
import { RevealDirective } from '../../reveal.directive';
import { Icon } from '../../icon/icon';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RevealDirective, Icon],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  readonly images: string[] = [
    '/galery_images/23234525432543.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.00.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.004321432.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.051411111.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.054321432.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.102342432.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.107654765.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.241234.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.24345.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.247777.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 19.54.2486578765.jpeg',
    '/galery_images/WhatsApp Image 2026-06-17 at 43214321.jpeg',
    '/galery_images/new (1).jpg',
    '/galery_images/new (2).jpg',
    '/galery_images/new (3).jpg',
    '/galery_images/new (4).jpg',
    '/galery_images/new (5).jpg',
    '/galery_images/new (6).jpg',
    ...Array.from({ length: 44 }, (_, i) => `/galery_images/image (${i}).jpg`),
  ];

  readonly limit = signal(12);
  readonly lightboxIndex = signal<number | null>(null);

  readonly visibleImages = computed(() => this.images.slice(0, this.limit()));
  readonly hasMore = computed(() => this.limit() < this.images.length);

  loadMore(): void {
    this.limit.update((l) => Math.min(l + 12, this.images.length));
  }

  openLightbox(index: number): void {
    this.lightboxIndex.set(index);
  }

  closeLightbox(): void {
    this.lightboxIndex.set(null);
  }

  prevImage(event: Event): void {
    event.stopPropagation();
    const idx = this.lightboxIndex();
    if (idx !== null) {
      this.lightboxIndex.set((idx - 1 + this.images.length) % this.images.length);
    }
  }

  nextImage(event: Event): void {
    event.stopPropagation();
    const idx = this.lightboxIndex();
    if (idx !== null) {
      this.lightboxIndex.set((idx + 1) % this.images.length);
    }
  }
}
