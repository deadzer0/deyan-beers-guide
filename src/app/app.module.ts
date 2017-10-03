import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { BeerslistComponent } from './beerslist/beerslist.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FavoriteComponent } from './favorite/favorite.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { BeerDetailComponent } from './beerslist/beer-detail/beer-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilterPipe } from './beerslist/filter.pipe';

const appRoutes: Routes = [
  { path: '', component: BeerslistComponent},
  { path: 'details/:name', component: BeerDetailComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    BeerslistComponent,
    HeaderComponent,
    FooterComponent,
    FavoriteComponent,
    CartComponent,
    BeerDetailComponent,
    PageNotFoundComponent,


  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [BeerslistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }