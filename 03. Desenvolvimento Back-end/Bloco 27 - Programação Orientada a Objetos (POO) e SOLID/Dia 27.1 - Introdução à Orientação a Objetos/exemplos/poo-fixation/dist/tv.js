"use strict";
class TV {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(`TV ${this._brand}, ${this._size}", resolution ${this._resolution} \navailable connections ${this._connections}`);
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(connection) {
        if (this._connections.includes(connection)) {
            this._connectedTo = connection;
            console.log(this._connectedTo);
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
}
const TV1 = new TV('Samsung', 50, 'Full HD', ['HDMI', 'Wifi', 'USB']);
TV1.turnOn();
TV1.connectedTo = 'HDMI';
console.log('Connected to', TV1.connectedTo);
