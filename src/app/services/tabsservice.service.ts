import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TabsserviceService {
  hideTabBarPages = [
    'new-group',
  ];  routeParamPages: string[] = [
    'product-details',
  ];
  constructor(private router: Router, private platform: Platform) {
   this.platform.ready().then(() => {
      this.navEvents();
   });
 }

 public hideTabs() {
   const tabBar = document.getElementById('myTabBar');
   //if (tabBar.style.display !== 'none') tabBar.style.display = 'none';
 }

 public showTabs() {
   const tabBar = document.getElementById('myTabBar');
   //if (tabBar.style.display !== 'flex') tabBar.style.display = 'flex';
 }

 private navEvents() {
   this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      this.showHideTabs(e);
   });
 }

 private showHideTabs(e: any) {

   const urlArray = e.url.split('/');
    const pageUrlParent = urlArray[urlArray.length - 2];
   const pageUrl = urlArray[urlArray.length - 1];

   const page = pageUrl.split('?')[0];
     const hideParamPage = this.routeParamPages.indexOf(pageUrlParent) > -1 && !isNaN(Number(page));
   const shouldHide = this.hideTabBarPages.indexOf(page) > -1 || hideParamPage;

    try {
     setTimeout(() => shouldHide ? this.hideTabs() : this.showTabs(), 300);
   } catch (err) {
   }
 }
}