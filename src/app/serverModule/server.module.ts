import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HighChartModule } from './../highChartModule/highChartModule';


import { ServerListComponent } from './components/server-list/server-list.component';
import { ServerInfoComponent } from './components/server-info/server-info.component';
import { routes } from './serverModule.routing';
import { ApiService } from './service/api.service';

@NgModule({

    declarations: [ServerListComponent, ServerInfoComponent],
    imports: [CommonModule, routes, HttpModule,HighChartModule ],
    exports: [ServerListComponent, ServerInfoComponent, HttpModule],
    providers: [ApiService]
})
export class ServerModule {

}