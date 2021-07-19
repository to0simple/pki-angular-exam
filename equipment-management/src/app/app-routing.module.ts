import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { EquipmentHandelComponent } from './equipment/equipment-handel/equipment-handel.component';
import { EquipmentGuard } from './equipment/guard/equipment.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/equipment-list',
    pathMatch: 'full',
  },
  {
    path: 'equipment-list',
    component: EquipmentListComponent
  },
  {
    path: 'equipment-handle',
    component: EquipmentHandelComponent,
    canDeactivate: [EquipmentGuard]
  },
  /* {
    path: 'equipment-detail',
    component: EquipmentHandelComponent
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
