import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtualizarPageRoutingModule } from './atualizar-routing.module';

import { AtualizarPage } from './atualizar.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtualizarPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [AtualizarPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AtualizarPageModule {}
