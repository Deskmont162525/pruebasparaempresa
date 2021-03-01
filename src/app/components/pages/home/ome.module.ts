import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmeRoutingModule } from './ome-routing.module';
import { OmeComponent } from './ome.component';
import { MaterialModule } from '../../../material.module'

@NgModule({
  declarations: [OmeComponent],
  imports: [CommonModule, OmeRoutingModule, MaterialModule],
})
export class OmeModule {}
