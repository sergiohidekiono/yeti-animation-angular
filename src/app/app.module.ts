import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RIVE_FOLDER, RIVE_VERSION, RIVE_WASM, RiveModule } from 'ng-rive';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './shared/primeng.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RiveModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    SharedModule
  ],
  providers: [
    {
      provide: RIVE_FOLDER,
      useValue: 'assets/animations',
    },
    {
      provide: RIVE_WASM,
      useValue: 'assets/rive/rive.wasm',
    },
    {
      provide: RIVE_VERSION,
      useValue: 'latest',
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
