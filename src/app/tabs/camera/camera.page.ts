import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor(public photoService: PhotoService) { }

  async ngOnInit(){
    await this.photoService.loadSaved();
  }

  addPhotoToGallery(){
    this.photoService.addNewToGallery();
  }
}
