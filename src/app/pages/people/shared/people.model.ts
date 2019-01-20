import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class People extends BaseResourceModel {
    constructor(
        public id?: number,
        public name?: string,
        public birth_year?: string,
        public eye_color?: string,
        public gender?: string,
        public hair_color?: string,
        public height?: string,
        public mass?: string,
        public skin_color?: string,
        public homeworld?: string,
        public films?: [],
        public species?: [],
        public starships?: [],
        public vehicles?: [],
        public url?: string,
        public created?: string,
        public edited?: string,
    ) {
        super();
    }

    static fromJson(jsonData: any): People {
        return Object.assign(new People(), jsonData);
    }
}