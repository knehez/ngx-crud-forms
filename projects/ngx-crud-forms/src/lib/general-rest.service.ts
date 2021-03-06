import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GeneralRestService {
    public objectName = '';

    actionUrl = 'backend/';

    constructor(protected _http: HttpClient) {
    }

    getAll(filter): Promise<any> {
        return new Promise((resolve, reject) => {
            const params = new HttpParams().set('filter', filter);
            this._http.get(`${this.actionUrl}${this.objectName}`, { params: { param: JSON.stringify(filter) } })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    async getAllSync(objectName) {
        return await this._http.get(`${this.actionUrl}${objectName}`).toPromise();
    }

    save(obj) {
        return new Promise((resolve, reject) => {
            this._http.post(`${this.actionUrl}${this.objectName}`, obj)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    file(obj) {
        return new Promise((resolve, reject) => {
            this._http.get(`${this.actionUrl}${this.objectName}/${obj.id}/file/${obj.fileName}`)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    update(obj) {
        return new Promise((resolve, reject) => {
            this._http.put(`${this.actionUrl}${this.objectName}/${obj.id}`, obj)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    delete(obj) {
        return new Promise((resolve, reject) => {
            this._http.delete(`${this.actionUrl}${this.objectName}/${obj.id}`, obj)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getOne(id: number) {
        return new Promise((resolve, reject) => {
            this._http.get(`${this.actionUrl}${this.objectName}/${id}`)
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }
}
