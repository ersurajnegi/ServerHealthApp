import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerListComponent } from './components/server-list/server-list.component';
import { ServerInfoComponent } from './components/server-info/server-info.component';

@NgModule({

    declarations: [ServerListComponent, ServerInfoComponent],
    imports: [CommonModule],
    exports: [ServerListComponent, ServerInfoComponent],
    providers: []
})
export class ServerModule {

}