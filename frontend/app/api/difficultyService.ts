import { ApiService } from './apiService';

class DifficultyService extends ApiService {
    constructor() {
        super('difficulties');
    }
    read(): Promise<{ data: Difficulty[] }> {
        return this.get();
    }
}

export const difficultyService = new DifficultyService();
