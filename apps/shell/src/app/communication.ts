// @ts-nocheck
import {Observable} from "windowed-observable";

// Custom API

/**
 * App Shell
 */
const mife: { name: string, call: Function }[] = [];
window.registerMFEApi = (name: string, call: Function) => {
    mife.push({
        name,
        call,
    });
};

window.callMFE = (target: string, msg: any) => {
    mife.filter((m) => m.name === target).forEach((m) => m.call(msg));
};

/**
 * MFE A
 */
window.registerMFEApi('A', (msg: any) => {
    if (msg.type === 'show_dialog') {
        // handle here
    }
});

/**
 * MFE B
 */
window.callMFE('A', {
    type: 'show_dialog',
    name: 'close_file',
});


// Window Observable

/**
 * MFE A
 */
const observable = new Observable('show_dialog');
observable.subscribe(data => {
    // handle here
});

/**
 * MFE B
 */
const observable = new Observable('show_dialog');
observable.dispatch({name: 'close_file'})
