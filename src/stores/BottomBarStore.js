import {action, makeObservable, observable} from "mobx";

class BottomBarStore {
    darkMode = false;
    page = 'characters';
    constructor() {
        makeObservable(this, {
            darkMode: observable,
            page: observable,
            toggleMode: action,
            changePage: action
        })
    }
    toggleMode() {
        if (this.darkMode === true) {
            this.darkMode = false;
            return;
        }
        this.darkMode = true;
    }
    changePage(value) {
        this.page = value;
    }
}
export default new BottomBarStore();
