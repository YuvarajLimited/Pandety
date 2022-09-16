import { Component, OnInit } from '@angular/core';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-pushnotfication',
  templateUrl: './pushnotfication.page.html',
  styleUrls: ['./pushnotfication.page.scss'],
})
export class PushnotficationPage implements OnInit {

  constructor(private localNotifications: LocalNotifications) { }
  
  single_notification() {
     this.localNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    });
  }
  multi_notification() {
     this.localNotifications.schedule([{
      id: 1,
      text: 'Multi ILocalNotification 1',
      sound: 'file://sound.mp3',
      data: { secret: 'key_data' }
    }, {
      id: 2,
      title: 'Local ILocalNotification Example',
      text: 'Multi ILocalNotification 2',
      icon: 'http://example.com/icon.png'
    }]);
  }



  delayed_notification() {
     this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: { at: new Date(new Date().getTime() + 3600) },
      led: 'FF0000',
      sound: null
    });
  }
  ngOnInit() {
 }
}
