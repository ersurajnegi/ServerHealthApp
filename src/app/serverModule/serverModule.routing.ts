import { RouterModule, Routes } from '@angular/router';
import { ServerListComponent } from '../serverModule/components/server-list/server-list.component';
import { ServerInfoComponent } from '../serverModule/components/server-info/server-info.component';

const serverRoutes: Routes = [
    { path: 'servers', component: ServerListComponent },
    { path: 'server/:id', component: ServerInfoComponent }

];

export const routes = RouterModule.forChild(serverRoutes);