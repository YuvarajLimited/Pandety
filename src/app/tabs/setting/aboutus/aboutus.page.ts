import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {
 
  constructor(public loaderservice: LoaderService) {}

  ngOnInit() {
    this.loaderservice.showLoader();

  }
}
