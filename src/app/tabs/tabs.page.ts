import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
 
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  navigate : any;
  constructor(private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar,
              private router: Router, 
              private authService: AuthenticationService) 
  {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     // this.checkDarkTheme();
    });
  }

// checkDarkTheme() {
//   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
//   if (prefersDark.matches) {
//     document.body.classList.toggle('dark');
//   }
  
// }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "../tabs/dashboard",
        icon  : "home"
      },
      {
        title : "Profile",
        url   : "/tabs/profile",
        icon  : "person-circle-outline"
      },
      {
        title : "Camera",
        url   : "/tabs/camera",
        icon  : "camera-outline"
      },
      {
        title : "Location",
        url   : "/tabs/location",
        icon  : "locate-outline"
      },
      {
        title : "Settings",
        url   : "/tabs/setting",
        icon  : "settings-outline"
      },
      {
        title : "Helps",
        url   : "/tabs/setting/helps",
        icon  : "help-circle-outline"
      },
      {
        title : "Feedback",
        url   : "/tabs/setting/feedback",
        icon  : "cafe-outline"
      }
      // {
      //   title : "Terms & Conditions",
      //   url   : "/tabs/setting/termsandconditions",
      //   icon  : "ribbon-outline"
      // }
    ];
 
  }
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
  ngOnInit() {
  }
}