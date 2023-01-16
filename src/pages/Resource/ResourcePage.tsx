import {
    makeAutoObservable,
    runInAction,
} from "mobx";
import {IResource} from "../../interfaces/resources";
import * as resourceApi from "../../api/modules/resource";


class ResourcePage {
    resources: IResource[] = [];
    totalPages = 0;
    currentPage = 1;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        runInAction(this.prefetchData);
    }

    async setCurrentPage(page: number) {
        this.currentPage = page;
        await this.prefetchData();
    }

    prefetchData = async () => {
        try {
            this.isLoading = true;
            const res = await resourceApi.getResourceByPage(this.currentPage)
            this.resources = res.data;
            this.totalPages = res.total_pages;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
        this.isLoading = false;
    };
}

export default ResourcePage;