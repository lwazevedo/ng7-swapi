import { BaseResourceModel } from '../models/base-resource.model';
import { Injector } from '@angular/core';
import { Observable, throwError, forkJoin } from 'rxjs';
import { map, catchError, concatAll } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


export abstract class BaseResourceService<T extends BaseResourceModel> {
    protected http: HttpClient;

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected jsonDataToResourceFn: (jsonData: any) => T
    ) {
        this.http = injector.get(HttpClient);
    }

    getAll(search = ''): Observable<T[]> {
        return this.http.get(`${this.apiPath}${search}`).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        );
    }

    getOne(_id: number): Observable<T[]> {
        return this.http.get(`${this.apiPath}/${_id}`).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        );
    }

    getMultipleAll(urls: string[]): Observable<T[]> {
        return <Observable<T[]>>forkJoin(urls.map(url => this.http.get(url)))
            .pipe(concatAll());
    }

    // All methods proteted

    protected getItems(urls: string[]) {
        return urls.map(url => this.http.get(url));
    }
    protected jsonDataToResources(jsonData: any[]): T[] {
        const resources: T[] = [];
        jsonData.forEach(
            element => resources.push(this.jsonDataToResourceFn(element))
        );
        return resources;
    }
    protected jsonDataToResource(jsonData: any): T {
        return this.jsonDataToResourceFn(jsonData);
    }
    protected handleError(error: any): Observable<any> {
        console.log('ERRO NA REQUISIÇÃO => ', error);
        return throwError(error);
    }
}
