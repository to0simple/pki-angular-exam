import { createReducer, on, Action } from '@ngrx/store';
import * as equipmentActions from '../actions/equipment.action';
import { Equipment } from '../model/equipment';

const initData: Equipment[] = [];

const equipmentReducer = createReducer(
    initData,
    on(equipmentActions.getEquipmentList, state => state),
    on(equipmentActions.modifyEquipment, state => state),
    on(equipmentActions.addEquipment, state => state),
    on(equipmentActions.deleteEquipment, state => state),
    on(equipmentActions.loadSuccess, (state, action) => ([...action.equipments])),
    on(equipmentActions.deleteSuccess, (state, action) => state.filter(item => item.id !== action.id)),
    on(equipmentActions.addSuccess, (state, action) => [...state, action.equipment]),
    on(equipmentActions.modifySuccess, (state, action) => {
        return state.map<Equipment>(item => {
            if (item.id === action.id) {
                return action.equipment;
            }
            return item;
        });
    })
);

export function reducer(state: any, action: Action): {} {
    return equipmentReducer(state, action);
}
