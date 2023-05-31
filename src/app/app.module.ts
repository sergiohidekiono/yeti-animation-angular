import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RIVE_FOLDER, RiveModule } from 'ng-rive';
import { AnotherAnimationComponent } from './another-animation/another-animation.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent, AnotherAnimationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RiveModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [
    {
      provide: RIVE_FOLDER,
      useValue: 'assets/animations',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
