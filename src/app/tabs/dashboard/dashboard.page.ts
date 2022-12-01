import { Component,OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  profile: any;
  darkMode: boolean = true;
  doRefresh: any;

  constructor(public loaderservice: LoaderService) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }
 ionChange(event) {
    console.log(event.detail.value)
}
 mode() {
  this.darkMode = !this.darkMode;
  document.body.classList.toggle('dark');
 }
 ngOnInit() {
  this.loaderservice.showLoader();
 }
}