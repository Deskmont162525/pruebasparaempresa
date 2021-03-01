import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OmeComponent } from './ome.component';

const routes: Routes = [{ path: '', component: OmeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OmeRoutingModule { }
