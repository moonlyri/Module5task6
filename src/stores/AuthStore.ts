import { makeAutoObservable } from "mobx";
import { login, register } from "../api/modules/authentication";

class AuthStore{

    token = '';
    id = '';
    error = '';

    constructor() {
        makeAutoObservable(this);
    }

    modifyError(error: string) {
        this.error = error;
    }

    async loginUser(email: string, password: string) {
        try {
            const res = await login({ email, password });
            this.error = "";
            this.token = res.token;
        }
        catch (e: any) {
            this.modifyError(e.message);
        }
    }

    async registerUser(email: string, password: string) {
        try {
            const res = await register({ email, password });
            this.error = "";
            this.token = res.token;
            this.id = res.id;
        }
        catch (e: any) {
            this.modifyError(e.message);
        }
    }

    logout() {
        this.token = '';
        this.id = '';
    }
}

export default AuthStore;