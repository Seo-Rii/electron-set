import electron from 'electron'
import _ from 'lodash'
import settingConfig from './config'
import uuid from './uuid'

export default class Setting {

    #dataObj: null | Object = null

    #proxyHandler = {
        get: function (obj: Object, prop: string): any {
            let data
        }
    }

    constructor() {

    }

    get data(): ProxyHandler<any> {
        return new Proxy({}, this.#proxyHandler)
    }

    getAllData(): undefined | Object {
        return undefined
    }

    getSettingPath(): string {
        return electron?.app?.getPath('userData') ?? electron?.remote?.app?.getPath('userData')
    }

}
