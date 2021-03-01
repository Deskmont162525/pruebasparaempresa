import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasRoutingModule } from './listas-routing.module';
import { ListasComponent } from './listas.component';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [ListasComponent],
  imports: [CommonModule, ListasRoutingModule, MaterialModule],
})
export class ListasModule {}
