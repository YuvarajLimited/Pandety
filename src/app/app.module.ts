import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    NativeGeocoder,
    Geolocation,
    Platform,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
