import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule
  ],
  exports: [SharedModule, ComponentsModule]
})
export class PagesModule { }
