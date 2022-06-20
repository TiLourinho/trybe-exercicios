class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo?: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(`TV ${this._brand}, ${this._size}", resolution ${this._resolution} \navailable connections ${this._connections}`);
  }

  get connectedTo(): string {
    return this._connectedTo as string;
  }

  set connectedTo(connection: string) {
    if (this._connections.includes(connection)) {
      this._connectedTo = connection;

      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const TV1 = new TV('Samsung', 50, 'Full HD', ['HDMI', 'Wifi', 'USB']);
TV1.turnOn();

TV1.connectedTo = 'HDMI';
console.log('Connected to', TV1.connectedTo);