import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  searchBar: any;
  isLoading: boolean;
  restaurants: any;

  constructor(public loadingController: LoadingController, public loaderservice: LoaderService) { 
    
  }

  ngOnInit() {
    this.loaderservice.showLoader();
  }
}
