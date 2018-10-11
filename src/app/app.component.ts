import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Components',
      url: '/components',
      icon: 'home'
    },
    {
      title: 'Password Item',
      url: '/password',
      icon: 'key'
    },
    {
      title: 'Toolbar Search',
      url: '/toolbar-search',
      icon: 'search'
    },
    {
      title: 'Loading',
      url: '/loading',
      icon: 'home'
    },
    {
      title: 'App Bar',
      url: '/app-bar',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
