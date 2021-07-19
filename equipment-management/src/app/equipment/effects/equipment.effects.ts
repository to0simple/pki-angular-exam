import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EquipmentService } from '../services/equipment.service';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, empty } from "rxjs";
import { NzMessageService } from 'ng-zorro-antd/message';
import { Equipment } from '../model/equipment';

@Injectable()
export class EquipmentEffects {

    getEquipmentList$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[equipment] get'),
            mergeMap(
                () => this.equipmentSrv.getEquimentList().pipe(
                    map(equipmentList => ({type: '[equipment] load success', equipments: equipmentList})),
                    catchError(() => EMPTY)
                )
            )
        )
    );
    deleteEquipment$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[equipment] delete'),
            mergeMap(
                (data: {id: string}) => this.equipmentSrv.deleteEquipment(data.id).pipe(
                    map(() => {
                        this.messageSrv.success('delete success');
                        return ({type: '[equipment] delete success', id: data.id});
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );
    addEquipment$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[equipment] add'),
            mergeMap(
                (data: {equipment: Equipment}) => this.equipmentSrv.addEquipment(data.equipment).pipe(
                    map((equipment) => {
                        this.messageSrv.success('add success');
                        return ({type: '[equipment] add success', equipment});
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );
    modifyEquipment$ = createEffect(() =>
        this.actions$.pipe(
            ofType('[equipment] modify'),
            mergeMap(
                (data: {id: string, equipment: Equipment}) => this.equipmentSrv.modifyEquiment(data.id, data.equipment
                    ).pipe(
                    map((equipment) => {
                        this.messageSrv.success('modify success');
                        return ({type: '[equipment] modify success', id: equipment.id, equipment});
                    }),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private equipmentSrv: EquipmentService,
        private messageSrv: NzMessageService
    ) { }
}
