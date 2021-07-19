import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Equipment } from '../model/equipment';
import * as EquipmentActions from '../actions/equipment.action';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.less']
})
export class EquipmentListComponent implements OnInit {

  data: Equipment[] = [];

  create(): void {
    this.router.navigateByUrl('/equipment-handle');
  }

  showDetail(equipment: Equipment): void {
    this.router.navigate(['/equipment-handle', {id: equipment.id}]);
  }

  delete(equipment: Equipment): void {
    this.modalSrv.confirm({
      nzTitle: 'Are you srue delete this equipment?',
      nzOkText: 'Yes',
      nzOkType: 'danger',
      nzCancelText: 'cancel',
      nzOnOk: () => {
        // delete equipment
        this.store.dispatch(EquipmentActions.deleteEquipment({id: equipment.id || ''}));
      }
    });
  }
  constructor(
    private store: Store<{equipments: Equipment[]}>,
    private modalSrv: NzModalService,
    private router: Router
  ) {
    store.select(state => state.equipments).subscribe(
      data => {
        this.data = data;
      }
    );
  }

  ngOnInit(): void {}

}
