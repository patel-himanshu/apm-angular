import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './home/page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductDetailGuard } from './products/product-detail/product-detail.guard';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
