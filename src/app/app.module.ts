import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './home/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
