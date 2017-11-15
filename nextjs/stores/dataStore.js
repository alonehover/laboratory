import {action, observable} from 'mobx'

let store = null

class Store {
    @observable list = []

    @action setList = (data) => {
        this.list = data
    }
}

export default new Store()
