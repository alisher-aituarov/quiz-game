import { LoginPayload, RegisterPayload } from '../types';
import { ApiService } from './apiService';

class UserService extends ApiService {
    constructor() {
        super('users');
    }

    register({ email, name, password }: RegisterPayload) {
        return this.post<any, RegisterPayload>('/sign-up', { email, name, password });
    }

    login({ email, password }: LoginPayload) {
        return this.post<any, LoginPayload>('/sign-in', { email, password });
    }

    loadMe() {
        return this.get('/me');
    }

    getGlobalRating() {
        return this.get('/rating-global');
    }

    uploadAvatar(data: FormData) {
        return this.post('/upload-avatar', data);
    }
}

export const userService = new UserService();
