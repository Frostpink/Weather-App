/** @format */

import axios from 'axios'

export default axios.create({
    baseURL: 'http://dataservice.accuweather.com/',
    headers: { 'Content-Type': 'application/json' },
})
