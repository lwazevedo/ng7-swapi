import { BaseResourceModel } from '../models/base-resource.model';
import { Injector } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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

    getAll(): Observable<T[]> {
        return this.http.get(this.apiPath).pipe(
            map(this.jsonDataToResource.bind(this)),
            catchError(this.handleError)
        );
    }

    // All methods proteted
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
