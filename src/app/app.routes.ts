import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherPageComponent } from './pages/another-page/another-page.component';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
    {
      path:'next',
      component:AnotherPageComponent
    },
     {
         path:'',
         component:HomeComponent
       },
  
  ];