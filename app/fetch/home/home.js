import {get } from '../index.js'
import { getjsonp } from '../index'

export function getHomeData() {
    return get('/api/home')
}
export function getDouBanApi() {
    return getjsonp('https://api.douban.com/v2/book/1220562')
}