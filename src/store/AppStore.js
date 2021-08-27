import { observable, action, makeObservable } from 'mobx';

class AppStore {
    page = '';
    isAuth = false;
    userName = '';
    token = '';
    constructor() {
        makeObservable(this, {
            page: observable,
            userName: observable,
            token: observable,
            isAuth: observable,
            changePage: action
        });
    }
    changePage(value) {
        this.page = value;
        console.log(this.page);
    }
    setAuth(value) {
        this.isAuth = value;
    }
    setUserName(value) {
        this.userName = value;
    }
    setToken(value) {
        this.token = value;
    }
}

export default new AppStore();
