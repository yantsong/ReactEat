import {get } from '../index.js'

export function getHomeData() {
    return get('/api/home')
}