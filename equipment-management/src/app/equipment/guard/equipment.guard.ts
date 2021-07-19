import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EquipmentHandelComponent } from '../equipment-handel/equipment-handel.component';
import * as _ from 'lodash';
import { NzModalService } from 'ng-zorro-antd/modal';

@Injectable({
  providedIn: 'root'
})
export class EquipmentGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: EquipmentHandelComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const result = _.isEqual(component.getCurrentData(), component.getFormData());
      return result ? result :  (() => {
        const confirRef = this.modalSrv.confirm<boolean>({
          nzTitle: 'warning',
          nzContent: 'The data has been modified. Are you sure you want to leave?',
          nzOkText: 'sure',
          nzCancelText: 'think again',
          nzOnOk: () => {
            confirRef.close(true);
          },
          nzOnCancel: () => {
            confirRef.close(false);
          }
        });
        return confirRef.afterClose;
      })();
  }
  constructor(
    private modalSrv: NzModalService
  ) {
  }
}
