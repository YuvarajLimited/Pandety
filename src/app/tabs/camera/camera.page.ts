import { Component, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { LoaderService } from 'src/app/services/loader.service';
import { PhotoService, UserPhoto } from 'src/app/services/photo.service';

 @Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(public photoService: PhotoService,
    public actionSheetController: ActionSheetController, public loaderservice: LoaderService) { }

  async ngOnInit(){
    this.loaderservice.showLoader();
    await this.photoService.loadSaved();
  }
  // autoHideShow() {
  //   this.loadingController.create({
  //     message: 'Loading...',
  //     duration: 2000, 
  //     translucent: true
  //   }).then((res) => {
  //     res.present();
  //     res.onDidDismiss().then((res) => {
  //       console.log('Loader closed', res);
  //     });
  //   });
  // } 
  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }
  }
