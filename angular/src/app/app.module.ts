import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { MamaModModule } from './mama-mod/mama-mod.module';
import { ProductModule } from './product/product.module';

// MLS 11/3/23 remove when want to Lazy Load...
import { CandyModuleModule } from './candy-module/candy-module.module';

// MLS 11/6/23 Need to import HttpClientModule when using HttpClient
// I modified the item.service.ts from using Of({array of values})
// to using HttpClient
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MamaModModule,
    ProductModule,
    // CandyModuleModule,  // MLS 11/3/23 remove when want to Lazy Load...
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
