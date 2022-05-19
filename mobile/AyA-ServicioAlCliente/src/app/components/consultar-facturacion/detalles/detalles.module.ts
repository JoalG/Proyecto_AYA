import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesPageRoutingModule } from './detalles-routing.module';

import { DetallesPage } from './detalles.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DetallesPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [DetallesPage]
})
export class DetallesPageModule {}
