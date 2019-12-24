import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryComponent } from './category/category.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:[ 
    BrowserModule, 
    FormsModule,
    MatMenuModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/:cardId', component: CardComponent },
      { path: 'profile', component: ProfileComponent }
    ])
  ],
  declarations: [ 
    AppComponent, 
    CardComponent, 
    ProfileComponent, 
    CategoryComponent, 
    TopBarComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
