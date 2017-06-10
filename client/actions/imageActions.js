import api from '../api';

export function addImage(value, callback) {
    api.addImage(value).then(function(data) {
        if(!data.data) {
            callback(false);
        } else {
            callback(data.data);
        }
        
    });
}

export function getImgsOwner(callback) {
    api.getImgsOwner().then(function(data) {
        if(data) {
            callback(data.data);
        }
    })
}

export function getImgs(callback) {
    api.getImgs().then(function(data) {
        if(data) {
            callback(data.data);
        }
    })
}

export function removeImg(id, callback) {
    api.removeImg(id).then(function(data) {
        if(data) {
            callback(data.data);
        }
    })
}

export function storeWinboard(value) {
    return {
        type: "STORE_WINBOARD",
        payload: value
    }
}

export function storeWinboardHome(value) {
    return {
        type: "STORE_WINBOARD_HOME",
        payload: value
    }
}
