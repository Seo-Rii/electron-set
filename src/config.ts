export default interface Isetting {
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

type Topen = 'realtime' | 'cached' | 'lock'
type Tencrypt = 'RSA' | 'AES'
