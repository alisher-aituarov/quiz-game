import { LoginPayload, RegisterPayload } from '../types';
import { ApiService } from './apiService';

class UserService extends ApiService {
    constructor() {
        super('users');
    }

    register({ email, name, password }: RegisterPayload) {
        return this.post<RegisterPayload>('/sign-up', { email, name, password });
    }

    login({ email, password }: LoginPayload) {
        return this.post<LoginPayload>('/sign-in', { email, password });
    }
}

export const userService = new UserService();
