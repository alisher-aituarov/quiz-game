import { login } from '../store/auth/slice';

export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginAction {
    type: typeof login.type;
    payload: LoginPayload;
}

export interface RegisterPayload {
    email: string;
    name: string;
    password: string;
}

export interface RegisterAction {
    type: typeof login.type;
    payload: RegisterPayload;
}
