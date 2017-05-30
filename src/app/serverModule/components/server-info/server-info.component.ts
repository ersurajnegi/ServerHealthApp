import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.css']
})
export class ServerInfoComponent implements OnInit {

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  goToPreviousPage() {
    this._location.back();
  }
}
