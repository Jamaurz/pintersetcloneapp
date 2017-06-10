import api from '../api';

export function goal(value) {
    return {
        type: "GOAL",
        payload: value
    }
}

export function singIn(callback) {
    var sign = api.singIn();
    sign.then(function(data) {
        if(data) {
            callback(data.data);
        } 
    });
}


export function singInTwitter(value) {
    return {
        type: "SING_IN_TWITTER",
        payload: value
    }
}

export function twitter(value) {
    console.log('value', value);
    return {
        type: "TWITTER",
        payload: value
    }
}
