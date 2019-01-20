import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class Planets extends BaseResourceModel {
    constructor(
        public id?: number,
        public name?: string,
        public diameter?: string,
        public rotation_period?: string,
        public orbital_period?: string,
        public gravity?: string,
        public population?: string,
        public climate?: string,
        public terrain?: string,
        public surface_water?: string,
        public residents?: [],
        public films?: [],
        public url?: string,
        public created?: string,
        public edited?: string,
    ) {
        super();
    }

    static fromJson(jsonData: any): Planets {
        return Object.assign(new Planets(), jsonData);
    }
}