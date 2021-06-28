import eventEmitter from "./listeners.js";

const getColor = (color) => {
    if (color === null) {
        return;
    }
    switch (color) {
        case "red": {
            eventEmitter.emit('onRed');
        } break;
        case "green": {
            eventEmitter.emit('onGreen');
        } break;
        case "yellow": {
            eventEmitter.emit('onYellow');
        } break;
        default: {
            console.log(`Нет такого цвета в светофоре - ${color}`);
        }
    }
}

getColor("red");
getColor("green");
getColor("yellow");
getColor("blue");