import { observable, action, makeObservable } from 'mobx';

class AppStore {
    page = '';
    isAuth = false;
    userName = '';
    token = '';
    constructor() {
        localStorage.getItem("isAuth") ? this.isAuth = true : this.isAuth = false;
        localStorage.getItem("userName") ? this.userName = localStorage.getItem("userName") : this.userName = '';
        localStorage.getItem("token") ? this.token = localStorage.getItem("token") : this.token = '';
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
