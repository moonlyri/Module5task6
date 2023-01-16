import { makeAutoObservable } from "mobx";
import { ICreateRequest } from "../../../interfaces/UserRequest/createRequest";
import { ICreateResponse } from "../../../interfaces/UserResponse/createresponse";
import * as userApi from "../../../api/modules/users";

class CreateUserStore{
    user: ICreateResponse = {id: '', name: '', job: '', createdAt:''};
    inputs: ICreateRequest = { name: '', job: '' };

    constructor() {
        makeAutoObservable(this);
    }

    changeUserName = (value: string) => {
        this.inputs.name = value;
    }

    changeUserJob = (value: string) => {
        this.inputs.job = value;
    }

    resetUser = () => {
        this.user  = {id: '', name: '', job: '', createdAt:''};
        this.inputs = { name: '', job: '' };
    }

    getDataForCreate = async () => {
        try {
            const res = await userApi.createUser(this.inputs);
            this.user = res;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
    }

}

export default CreateUserStore;