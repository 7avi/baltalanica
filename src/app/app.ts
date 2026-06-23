import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { Gallery } from './components/gallery/gallery';
import { Rules } from './components/rules/rules';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { CookieBanner } from './components/cookie-banner/cookie-banner';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Services, Gallery, Rules, Contact, Footer, CookieBanner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'baltalanica';
}
