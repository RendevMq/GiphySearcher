import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { GifDisplayComponent } from './components/gif-display/gif-display.component';
import { HistoryComponent } from './components/history/history.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { AsideComponent } from './layouts/aside/aside.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GiphyService } from './services/giphy.service';
import { MockGiphyService } from './services/mock-giphy.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    GifDisplayComponent,
    HistoryComponent,
    NavbarComponent,
    AsideComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
      // Para usar el servicio mock durante desarrollo(LIMITE DE PETICIONES POR LA API DE GIPHY):
      { provide: GiphyService, useClass: MockGiphyService }

      // Cambiar al servicio real:
      // { provide: GiphyService, useClass: GiphyService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
