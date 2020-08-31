import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
  },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' },
  {
    path: 'arstechnica',
    loadChildren: './arstechnica/arstechnica.module#ArstechnicaPageModule',
  },
  {
    path: 'techcrunch',
    loadChildren: './techcrunch/techcrunch.module#TechcrunchPageModule',
  },  { path: 'techcrunch', loadChildren: './techcrunch/techcrunch.module#TechcrunchPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
