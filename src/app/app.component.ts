import { Component } from '@angular/core';
import { TabsserviceService } from './services/tabsservice.service';

 @Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

   constructor(private tabsservice: TabsserviceService) { }

   ngOnInit() {
    this.tabsservice.hideTabs();
   }
}
