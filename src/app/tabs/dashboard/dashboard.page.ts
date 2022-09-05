import { Component,OnInit } from '@angular/core';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  profile: any;
  darkMode: boolean = true; 
 
 constructor() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  this.darkMode = prefersDark.matches;
 }

 cambio() {
  this.darkMode = !this.darkMode;
  document.body.classList.toggle('dark');
 }
  ngOnInit() {
  }
}
