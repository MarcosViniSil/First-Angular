import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PageSecondComponent } from './components/page-second/page-second.component';
import { Page1Component } from './components/page1/page1.component';
import { AnotherPageComponent } from './pages/another-page/another-page.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    MenuBarComponent,
    PageSecondComponent,
    Page1Component,
    AnotherPageComponent,
    HomeComponent,
    RouterModule
  ]
})
export class AppModule { }
