import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Equipment } from './equipment/model/equipment';
import * as EquipmentActions from './equipment/actions/equipment.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'equipment-management';

  constructor(private store: Store<{equipment: Equipment}>) {
  }

  ngOnInit(): void {
    this.store.dispatch(EquipmentActions.getEquipmentList());
  }
}
