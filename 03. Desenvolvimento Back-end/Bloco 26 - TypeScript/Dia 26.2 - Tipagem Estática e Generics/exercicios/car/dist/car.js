"use strict";
var Colors;
(function (Colors) {
    Colors["BLACK"] = "Black";
    Colors["WHITE"] = "White";
    Colors["RED"] = "Red";
    Colors["SILVER"] = "Silver";
})(Colors || (Colors = {}));
;
var Doors;
(function (Doors) {
    Doors["FRONT_LEFT"] = "driver's";
    Doors["FRONT_RIGHT"] = "passenger's";
    Doors["BACK_LEFT"] = "back left passenger";
    Doors["BACK_RIGHT"] = "back right passenger";
})(Doors || (Doors = {}));
;
var Directions;
(function (Directions) {
    Directions["LEFT"] = "left";
    Directions["RIGHT"] = "right";
})(Directions || (Directions = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    ;
    honk() {
        console.log('Bip, Bip!');
    }
    ;
    openTheDoor(door) {
        console.log(`Open the ${door} door`);
    }
    ;
    closeTheDoor(door) {
        console.log(`Close the ${door} door`);
    }
    ;
    turnOn() {
        console.log('The engine is on');
    }
    ;
    turnOff() {
        console.log('The engine is off');
    }
    ;
    speedUp() {
        console.log('Speeding up');
    }
    ;
    speedDown() {
        console.log('Slowing down');
    }
    ;
    stop() {
        console.log('Stop the car');
    }
    ;
    turn(direction) {
        console.log(`Turn ${direction}`);
    }
    ;
}
;
const gol = new Car('Volkswagen', Colors.SILVER, 4);
gol.openTheDoor(Doors.FRONT_LEFT);
gol.closeTheDoor(Doors.FRONT_LEFT);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.honk();
gol.openTheDoor(Doors.BACK_RIGHT);
gol.closeTheDoor(Doors.BACK_RIGHT);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.LEFT);
gol.speedUp();
gol.speedDown();
gol.turn(Directions.RIGHT);
gol.speedUp();
gol.speedDown();
gol.stop();
gol.openTheDoor(Doors.BACK_RIGHT);
gol.closeTheDoor(Doors.BACK_RIGHT);
