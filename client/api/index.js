var axios = require('axios');

//import { apiPrefix } from '../../etc/config.json';
var apiPrefix = 'https://cloneapp-jamaurz.c9users.io';

export default {
    addImage(image) {
        return axios.post(apiPrefix + '/addimage', {'image': image});
    },
    singIn() {
        return axios.get(apiPrefix + '/info')
    },
    getImgsOwner() {
       return axios.post(apiPrefix + '/getimgsowner');
    },
    getImgs() {
       return axios.get(apiPrefix + '/getimgs');
    },
    removeImg(id) {
        return axios.post(apiPrefix + '/removeimg', {id});
    }
}
