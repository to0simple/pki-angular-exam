import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultInterceptor } from './core/interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { EquipmentHandelComponent } from './equipment/equipment-handel/equipment-handel.component';
import { ZORROMODULE } from './zorro.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {reducer} from './equipment/reducers/equipment.reducer';
import { EquipmentEffects } from './equipment/effects/equipment.effects';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    EquipmentListComponent,
    EquipmentHandelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({equipments: reducer}),
    EffectsModule.forRoot([EquipmentEffects]),
    ...ZORROMODULE,
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
