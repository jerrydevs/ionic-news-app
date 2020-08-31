import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ArstechnicaPage } from './arstechnica.page';

const routes: Routes = [
  {
    path: '',
    component: ArstechnicaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArstechnicaPage]
})
export class ArstechnicaPageModule {}
