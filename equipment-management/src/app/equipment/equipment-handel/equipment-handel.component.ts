import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { handleFormValue } from '../../uitls/utils';
import { Store } from '@ngrx/store';
import * as equipmentActions from '../actions/equipment.action';
import { Equipment } from '../model/equipment';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-equipment-handel',
  templateUrl: './equipment-handel.component.html',
  styleUrls: ['./equipment-handel.component.less']
})
export class EquipmentHandelComponent implements OnInit {

  private handleForm: FormGroup;
  // tslint:disable-next-line: variable-name
  private _currentFormData: Equipment = {};

  submit(): void {
    const formValue = handleFormValue(this.handleForm.getRawValue());
    formValue.id ? this.store.dispatch(equipmentActions.modifyEquipment({id: formValue.id, equipment: formValue})) :
    this.store.dispatch(equipmentActions.addEquipment({equipment: formValue }));
    this._currentFormData = formValue;
  }

  constructor(
    private fb: FormBuilder,
    private store: Store<{equipments: Equipment[]}>,
    private acRouter: ActivatedRoute
    ) {
    this.handleForm = fb.group({
      id: [],
      model: [],
      brand: [],
      weight: [],
      manufactureDate: []
    });
    const detailId = acRouter.snapshot.params.id;
    if (detailId) {
      store.select(state => state.equipments.filter(item => item.id === detailId)).subscribe((equipments) => {
        if (equipments[0] && equipments[0].id !== this.handleForm.getRawValue().id){
          this._currentFormData = _.cloneDeep(equipments[0]);
          this.handleForm.patchValue(equipments[0]);
        }
      });
    }
  }

  ngOnInit(): void {}

  getCurrentData(): Equipment{
    return this._currentFormData;
  }
  getForm(): FormGroup {
    return this.handleForm;
  }

  getFormData(): any {
    return handleFormValue(this.handleForm.getRawValue());
  }

}
