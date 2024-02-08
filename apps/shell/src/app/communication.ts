// https://dev.to/luistak/cross-micro-frontends-communication-30m3#custom-events

// Define a specific context namespace
// const observable = new Observable('cart-items');

// application shell
const mife = [];
window.registerMifeApi = (name, call) => {
    mife.push({
        name,
        call,
    });
};

window.callMife = (target, msg) => {
    mife.filter((m) => m.name === target).forEach((m) => m.call(msg));
};

// microfrontend A
window.registerMifeApi('A', (msg) => {
    //handle message;
});

// microfrontend B
window.callMife('A', {
    type: 'show_dialog',
    name: 'close_file',
});
