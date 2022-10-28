import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { TitleHomerComponent } from './components/title-homer/title-homer.component';
import { BigCardHomerComponent } from './components/big-card-homer/big-card-homer.component';
import { SmallCardHomerComponent } from './components/small-card-homer/small-card-homer.component';
import { ConteudComponent } from './pages/conteud/conteud.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderHomeComponent,
    TitleHomerComponent,
    BigCardHomerComponent,
    SmallCardHomerComponent,
    ConteudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
