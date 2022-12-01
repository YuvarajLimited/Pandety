import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor( public loadingController: LoadingController) { }
  isLoading = false;
 
  async showLoader() {
    return  await this.loadingController.create({
      message: 'Please wait...',
      showBackdrop: false,
      spinner: "lines-small"
    }).then((res) => {
      res.present().then(() => {
        if(!this.isLoading){
          res.dismiss().then(() => console.log());
        }
      })
    });
  }
   async hideLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss()
    .then(() => {
      }
      );
  }
}
