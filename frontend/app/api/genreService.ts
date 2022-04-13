import { ApiService } from './apiService';

class GenresService extends ApiService {
    constructor() {
        super('genres');
    }
    read(): Promise<{ data: Genre[] }> {
        return this.get();
    }
}

export const genresService = new GenresService();
