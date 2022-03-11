import { httpClient } from './httpClient';

export class ApiService {
    entity: string;

    constructor(entity: string) {
        this.entity = entity;
    }

    protected get() {
        return httpClient.get(this.entity);
    }
    protected post<T>(uri: string, body: T) {
        console.log(body);
        return httpClient.post(this.entity + uri, body);
    }
    protected put() {}
    protected delete() {}
}
