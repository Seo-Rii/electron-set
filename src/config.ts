export enum Topen {
    REALTIME = "realtime",
    CACHE = 'cache',
    LOCK = 'lock'
}

export enum Tencrypt {
    RSA = "rsa",
    AES = 'aes',
    LOCK = 'lock'
}


export const defaultConfig: Isetting = {
    path: null,
    openMethod: Topen.REALTIME,
    retry: null,
    sync: false,
    bson: false,
    encrypt: null
}

export interface Isetting {
    path: null | string
    openMethod: null | Topen
    retry: null | number
    sync: boolean
    bson: boolean
    encrypt: null | {
        type: Tencrypt
        key: string
    }
}

export function configureParser(config: Isetting) {
    return Object.assign(config, defaultConfig)
}
