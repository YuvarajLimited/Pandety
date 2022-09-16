import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor( public loadingController: LoadingController) { }
  isLoading = false;

  autoLoader() {
    this.loadingController.create({
      message: 'Loading...',
      duration: 1000
    }).then((response) => {
      response.present();
      response.onDidDismiss().then((response) => {
        console.log('Loader dismissed', response);
      });
    });
  }
/// another code
  async showHideAutoLoader() {
    const loading = await this.loadingController.create({
      message: 'This Loader Will Auto Hide in 2 Seconds',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed! after 2 Seconds', { role, data });
  }
  // Show the loader for infinite time
  async showLoader() {
    return  await this.loadingController.create({
      message: 'Please wait...',
      showBackdrop: false,
      spinner: "lines-small"
    }).then((res) => {
      res.present().then(() => {
        if(!this.isLoading){
          res.dismiss().then(() => console.log('Loader dismissed'));
        }
      })
    });
  }
   async hideLoader() {
    this.isLoading = false;
    return await this.loadingController.dismiss()
    .then(() => {
      console.log('Loading dismissed!')}
      );
  }
}
