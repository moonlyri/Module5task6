import { makeAutoObservable } from "mobx";
import AuthStore from "../../stores/AuthStore";

class AuthentificationStore {
    private authStore: AuthStore;

    email = '';
    password = '';
    error = '';

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
        makeAutoObservable(this);
    }

    changeEmail(email: string) {
        this.email = email;
        if (!!this.error) {
            this.error = '';
        }
    }

    changePassword(password: string) {
        this.password = password;
        if (!!this.error) {
            this.error = '';
        }
    }

    async login() {
        try {
            await this.authStore.loginUser(this.email, this.password);
        }
        catch (e) {
            if (e instanceof Error) {
                this.error = e.message;
            }
        }
    }

    async register() {
        try {
            await this.authStore.registerUser(this.email, this.password);
        }
        catch (e) {
            if (e instanceof Error) {
                this.error = e.message;
            }
        }
    }

    logout() {
        this.authStore.logout();
    }
}

export default AuthentificationStore;