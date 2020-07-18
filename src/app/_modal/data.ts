import {HaysServices} from './HaysServices';

export interface Data {
 content: HaysServices[];
 totalElements: number;
 totalPages: number;
 last: boolean;
 numberOfElements: number;
 sort?: any;
 first: boolean;
 size: number;
 number: number;
}
