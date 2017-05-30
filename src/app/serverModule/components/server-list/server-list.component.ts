import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {
  public serverList : any = new Array();

  constructor() { }

  ngOnInit() {
    for(let i = 1; i< 11 ; i++){
      this.serverList.push({
        serverName : `${i}: Server`,
        serverId: i,
        filled : i * 10
      });
    }
  }

}
