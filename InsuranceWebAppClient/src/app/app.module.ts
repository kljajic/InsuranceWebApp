import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { OsiguravajuceKuceComponent } from './osiguravajuce-kuce/osiguravajuce-kuce.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OsiguravajucaKucaComponent } from './osiguravajuca-kuca/osiguravajuca-kuca.component';

import { OsiguravajuceKuceService } from './services/osiguravajuce-kuce.service';

import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    OsiguravajuceKuceComponent,
    HeaderComponent,
    FooterComponent,
    OsiguravajucaKucaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    OsiguravajuceKuceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
