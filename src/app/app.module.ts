import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RIVE_FOLDER, RiveModule } from 'ng-rive';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './shared/primeng.module';
import { NgxHowlerService } from 'ngx-howler';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RiveModule,
    BrowserAnimationsModule,
    PrimeNgModule
  ],
  providers: [
    NgxHowlerService,
    {
      provide: RIVE_FOLDER,
      useValue: 'assets/animations',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
