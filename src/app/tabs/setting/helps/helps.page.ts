import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-helps',
  templateUrl: './helps.page.html',
  styleUrls: ['./helps.page.scss'],
})
export class HelpsPage implements OnInit {

  constructor(public loaderservice: LoaderService) { }

  ngOnInit() {
    this.loaderservice.showLoader();
  }

}
