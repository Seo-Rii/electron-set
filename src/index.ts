import electron from 'electron'
import _ from 'lodash'
import {Isetting, configureParser, defaultConfig} from './config'
import uuid from './uuid'
import {load, loadSync, save, saveSync} from './fileOperation'

type Tdata = Object | ProxyHandler<any>

export default class Setting {

    #dataObj: Object = defaultConfig
    #config: Isetting

    #proxyHandler = {
        get: (obj: Object, prop: string): any => {
            let data = this.getAllData()
            return _.get(data, prop)
        }
    }


    constructor(config: undefined | Isetting) {
        this.#config = configureParser(config ?? defaultConfig)
    }

    get data(): Tdata {
        return new Proxy({}, this.#proxyHandler)
    }

    set data(obj: Tdata) {

    }

    getAllData(): undefined | Object {
        return undefined
    }

    getSettingPath(): string {
        return electron?.app?.getPath('userData') ?? electron?.remote?.app?.getPath('userData')
    }

}
