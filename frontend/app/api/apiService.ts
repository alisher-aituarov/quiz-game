import { AxiosResponse } from 'axios';
import { httpClient } from './httpClient';

export class ApiService {
    entity;

    constructor(entity: string) {
        this.entity = entity;
    }

    protected get<R>(uri = '') {
        return httpClient.get(this.entity + uri);
    }
    protected post<R, B = undefined>(uri: string, body?: B) {
        return httpClient.post(this.entity + uri, body);
    }
    protected put() {}
    protected delete() {}
}
