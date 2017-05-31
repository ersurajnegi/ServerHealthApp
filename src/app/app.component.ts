import { Component } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _slimLoadingBarService: SlimLoadingBarService,
    private _router: Router
  ) {
    _router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this._slimLoadingBarService.start();
      return;
    }
    if (event instanceof NavigationEnd
      || event instanceof NavigationCancel
      || event instanceof NavigationError) {

      this._slimLoadingBarService.complete();
      return;
    }
  }
}
