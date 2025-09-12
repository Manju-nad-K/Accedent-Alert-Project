import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    { path: '', redirectTo: 'login', pathMatch: 'full' },

    { path: 'login', component: LoginComponent },

    { path: 'home', component: HomeComponent, canActivate: [] },
    { path: 'about', loadComponent: () => import("./about/about.component").then(x => x.AboutComponent) },
    { path: 'call', loadComponent: () => import("./call/call.component").then(x => x.CallComponent) },
    { path: 'safety', loadComponent: () => import("./safetyy/safety.component").then(x => x.SafetyComponent) },
    { path: 'profile', loadComponent: () => import("./profile/profile.component").then(m => m.ProfileComponent) },

    { path: '**', redirectTo: 'login' }

];
