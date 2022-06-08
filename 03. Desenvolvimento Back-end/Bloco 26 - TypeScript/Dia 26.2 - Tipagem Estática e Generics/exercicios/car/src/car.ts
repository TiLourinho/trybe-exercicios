enum Colors {
  BLACK = 'Black',
  WHITE = 'White',
  RED = 'Red',
  SILVER = 'Silver',
};

enum Doors {
  FRONT_LEFT = 'driver\'s',
  FRONT_RIGHT = 'passenger\'s',
  BACK_LEFT = 'back left passenger',
  BACK_RIGHT = 'back right passenger',
};

enum Directions {
  LEFT = 'left',
  RIGHT = 'right',
}

class Car {
  brand: string;
  color: Colors;
  doors: number;

  constructor(brand: string, color: Colors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  };

  honk(): void {
    console.log('Bip, Bip!');
  };

  openTheDoor(door: Doors): void {
    console.log(`Open the ${door} door`);
  };

  closeTheDoor(door: Doors): void {
    console.log(`Close the ${door} door`);
  };

  turnOn(): void {
    console.log('The engine is on');
  };

  turnOff(): void {
    console.log('The engine is off');
  };

  speedUp(): void {
    console.log('Speeding up');
  };

  speedDown(): void {
    console.log('Slowing down');
  };

  stop(): void {
    console.log('Stop the car');
  };

  turn(direction: Directions): void {
    console.log(`Turn ${direction}`);
  };
};

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