import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
  ];

export const routing = RouterModule.forRoot(
    appRoutes,
   // { enableTracing: true } // <-- debugging purposes only
  );
