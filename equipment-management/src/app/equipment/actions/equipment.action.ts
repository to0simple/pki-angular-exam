import { createAction, props } from '@ngrx/store';
import { Equipment } from '../model/equipment';

export const getEquipmentList = createAction(
    '[equipment] get'
);
export const modifyEquipment = createAction(
    '[equipment] modify',
    props<{id: string, equipment: Equipment}>()
);
export const addEquipment = createAction(
    '[equipment] add',
    props<{equipment: Equipment}>()
);
export const deleteEquipment = createAction(
    '[equipment] delete',
    props<{id: string}>()
);

export const loadSuccess = createAction(
    '[equipment] load success',
    props<{equipments: Equipment[]}>()
);

export const deleteSuccess = createAction(
    '[equipment] delete success',
    props<{id: string}>()
);

export const addSuccess = createAction(
    '[equipment] add success',
    props<{equipment: Equipment}>()
);

export const modifySuccess = createAction(
    '[equipment] modify success',
    props<{id: string, equipment: Equipment}>()
);
