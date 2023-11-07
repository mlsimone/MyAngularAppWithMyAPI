import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandyModuleRoutingModule } from './candy-module-routing.module';
import { CandyComponent } from './candy/candy.component';


@NgModule({
  declarations: [
    CandyComponent
  ],
  imports: [
    CommonModule,
    CandyModuleRoutingModule
  ]
})
export class CandyModuleModule { }
