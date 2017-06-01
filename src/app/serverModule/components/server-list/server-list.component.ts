import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ChartDirective } from './../../../highChartModule/directives/chart.directive';


@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  public serverList: any = new Array();

  constructor(private _api: ApiService) { }

  ngOnInit() {
    for (let i = 1; i < 11; i++) {
      this.serverList.push({
        serverName: `${i}: Server`,
        serverId: i,
        filled: i * 10
      });
    }
    this.getServerData();
  }


  getServerData() {
    this._api.getServersData()
    // .subscribe((data) => {
    //   this.serverList = data;
    // }, (error) => {

    // });
  }

}
