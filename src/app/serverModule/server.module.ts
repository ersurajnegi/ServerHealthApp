import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerListComponent } from './components/server-list/server-list.component';
import { ServerInfoComponent } from './components/server-info/server-info.component';
import { routes } from './serverModule.routing';

@NgModule({

    declarations: [ServerListComponent, ServerInfoComponent],
    imports: [CommonModule, routes],
    exports: [ServerListComponent, ServerInfoComponent],
    providers: []
})
export class ServerModule {

}