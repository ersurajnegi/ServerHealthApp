import { RouterModule, Routes } from '@angular/router';
import { ServerListComponent } from './serverModule/components/server-list/server-list.component';


const appRoutes: Routes = [
    { path: "", redirectTo: '/servers', pathMatch: 'full' },
    { path: '**', redirectTo: '/servers', pathMatch: 'full' }
];

export const routes = RouterModule.forRoot(appRoutes);