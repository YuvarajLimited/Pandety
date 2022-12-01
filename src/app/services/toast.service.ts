import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

​  async successToast(toastMessage: string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      position : 'bottom',
      duration: 2000,
      cssClass: 'toast-success'
    });
    toast.present();
  }
​
  async dangerToast(toastMessage: string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      position : 'bottom',
      duration: 2000,
      cssClass: 'toast-danger'
    });
    toast.present();
  }
​
  async warningToast(toastMessage: string) {
     const toast = await this.toastController.create({
      message: toastMessage,
      position : 'bottom',
      duration: 2000,
      cssClass: 'toast-warning'
    });
    toast.present();
  }
}