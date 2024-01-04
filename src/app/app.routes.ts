import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NewsComponent } from './pages/news/news.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  {'path': 'home', 'title': 'Home', component:HomeComponent},
  {'path': 'about', 'title': 'About', component:AboutComponent},
  {'path': 'services', 'title': 'Services', component:ServicesComponent},
  {'path': 'news', 'title': 'News', component:NewsComponent},
  {'path': 'contact', 'title': 'Contact', component:ContactComponent},
  {'path': '', redirectTo: '/home', pathMatch: 'full'},
  {'path': '**', component:PageNotFoundComponent},
];
