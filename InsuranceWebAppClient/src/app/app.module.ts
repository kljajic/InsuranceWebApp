import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';

import { OsiguravajuceKuceComponent } from './osiguravajuce-kuce/osiguravajuce-kuce.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OsiguravajucaKucaComponent } from './osiguravajuca-kuca/osiguravajuca-kuca.component';

import { OsiguravajuceKuceService } from './services/osiguravajuce-kuce.service';
import { KupiOsiguranjeService } from './services/kupi-osiguranje.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { KupiOsiguranjeComponent } from './kupi-osiguranje/kupi-osiguranje.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { OsiguranjeComponent } from './osiguranje/osiguranje.component';
import { OsiguranjeService } from './services/osiguranje.service';

@NgModule({
  declarations: [
    AppComponent,
    OsiguravajuceKuceComponent,
    HeaderComponent,
    FooterComponent,
    OsiguravajucaKucaComponent,
    KupiOsiguranjeComponent,
    ONamaComponent,
    OsiguranjeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    OsiguravajuceKuceService,
    KupiOsiguranjeService,
    OsiguranjeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
