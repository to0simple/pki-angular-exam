import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from '../model/equipment';

@Injectable({providedIn: 'root'})
export class EquipmentService {

    constructor(private httpClient: HttpClient) { }

    getEquimentList(): Observable<any> {
        return this.httpClient.get('/equipments');
    }

    modifyEquiment(id: string, data: Equipment): Observable<any> {
        return this.httpClient.put(`/equipments/${id}`, data);
    }

    addEquipment(data: Equipment): Observable<any> {
        return this.httpClient.post(`/equipments`, data);
    }

    deleteEquipment(id: string): Observable<any> {
        return this.httpClient.delete(`/equipments/${id}`);
    }
}
