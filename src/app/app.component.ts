import { Component } from '@angular/core';
import { TabsserviceService } from './services/tabsservice.service';

 @Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  myTabBar: string;
  constructor(private tabsservice: TabsserviceService) { }

}
