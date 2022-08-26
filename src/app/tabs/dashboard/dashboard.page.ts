import { Component,ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  price: any;
  slideOpts = {
    slidesPerView: 1.5,
    spaceBetween: 5,
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000
    },
}
 constructor(private router: Router, private authService: AuthenticationService) {}
 
 async logout() {
  await this.authService.logout();
  this.router.navigateByUrl('/', { replaceUrl: true });
}
  ngOnInit() {
  }
}
