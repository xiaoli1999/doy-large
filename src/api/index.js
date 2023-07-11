// import http from '../libs/http.tools'
import axios from 'axios'

export const getJson = () => {
    // https://geo.datav.aliyun.com/areas_v3/bound/370500_full.json
    return axios.get('map.json')
}
