import {makeAutoObservable} from "mobx";
import {IUpdateRequest} from "../../../interfaces/UserRequest/updateRequest";
import {IUpdateResponse} from "../../../interfaces/UserResponse/updateresponse";
import * as userApi from "../../../api/modules/users";

class UpdateUserStore{
    user: IUpdateResponse = {name: '', job: '', updatedAt:''};
    inputs: IUpdateRequest = { name: '', job: '' };
    id = "";

    constructor() {
        makeAutoObservable(this);
    }

    changeUserId = (value: string) => {
        this.id = value;
    }

    changeUserName = (value: string) => {
        this.inputs.name = value;
    }

    changeUserJob = (value: string) => {
        this.inputs.job = value;
    }

    resetUser = () => {
        this.user  = {name: '', job: '', updatedAt:''};
        this.inputs = { name: '', job: '' };
        this.id = "";
    }

    getDataForUpdate = async () => {
        try {
            this.user = await userApi.updateUserById(this.id, this.inputs);
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
    }

}

export default UpdateUserStore;