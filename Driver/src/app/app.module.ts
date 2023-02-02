import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { IonicRatingModule } from 'ionic4-rating';
import * as firebase from 'firebase';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { FileUploadModule } from 'ng2-file-upload';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import {
  GoogleMaps,
} from '@ionic-native/google-maps';
import { LocationTrackerService } from './services/location-tracker.service';
import { OnesignalService } from './services/onesignal.service';
import { PopUpService } from './services/pop-up.service';
import { PaystackService } from './services/paystack.service';
import { ProfileService } from './services/profile.service';
import { AcceptPage } from './pages/accept/accept.page';

export const firebaseConfig = {
  apiKey: "AIzaSyDDeNo2RqB6hdVhZNYDNG8HjqF9m4_H8XQ",
  authDomain: "flytaxi-642d4.firebaseapp.com",
  databaseURL: "https://flytaxi-642d4-default-rtdb.firebaseio.com",
  projectId: "flytaxi-642d4",
  storageBucket: "flytaxi-642d4.appspot.com",
  messagingSenderId: "482104240102",
  appId: "1:482104240102:web:05c77b1e2c290426acd827"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AcceptPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicRatingModule,
    IonicStorageModule.forRoot(),
    FileUploadModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    BackgroundMode,
    OneSignal,
    InAppBrowser,
    CallNumber,
    HTTP,
    File,
    FileChooser,
    GoogleMaps,
    Firebase,
    FilePath,
    SocialSharing,
    Vibration,
    LocationTrackerService,
    OnesignalService,
    PopUpService,
    PaystackService,
    ProfileService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
