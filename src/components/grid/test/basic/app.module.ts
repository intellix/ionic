import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from '../../../../../ionic-angular';


@Component({
  templateUrl: 'main.html'
})
export class E2EPage {}

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class E2EApp {
  rootPage = E2EPage;
}

@NgModule({
  declarations: [
    E2EApp,
    E2EPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(E2EApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    E2EPage,
    E2EApp
  ]
})
export class AppModule {}