import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  navigate : any;
  constructor(private platform: Platform, private router: Router, private authService: AuthenticationService) 
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
    ]
  }
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
