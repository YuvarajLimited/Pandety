import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { LoaderService } from '../services/loader.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  navigate : any;
  arkMode: boolean = true;
  credentials: any;
  showTabs: any
  constructor(private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar,
              private router: Router,
              public loaderservice: LoaderService,
              private authService: AuthenticationService,
              public photoService: PhotoService)
              {
                this.sideMenu();
                this.initializeApp();
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
                this.arkMode = prefersDark.matches;
              }
              addPhotoToGallery(){
                this.photoService.addNewToGallery();
              }
              ngOnInit() {
                this.loaderservice.showLoader();
                this.photoService.loadSaved();
               }
  mode() {
    this.arkMode = !this.arkMode;
    document.body.classList.toggle('dark');
   }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     });
  }
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
      },
      {
        title : "",
        url   : "",
        icon  : ""
      }
    ];

  }
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
