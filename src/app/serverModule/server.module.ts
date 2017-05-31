import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ServerListComponent } from './components/server-list/server-list.component';
import { ServerInfoComponent } from './components/server-info/server-info.component';
import { routes } from './serverModule.routing';
import { ApiService } from './service/api.service';
import { ChartDirective } from './directives/chart.directive';

@NgModule({

    declarations: [ServerListComponent, ServerInfoComponent, ChartDirective],
    imports: [CommonModule, routes, HttpModule],
    exports: [ServerListComponent, ServerInfoComponent, HttpModule],
    providers: [ApiService]
})
export class ServerModule {

}