import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumComponent } from './component/album/album.component';
import { HttpClientModule } from '@angular/common/http';
import { FormulaireComponent } from './component/formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, AlbumComponent, FormulaireComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
