interface MyInterface {
  myNumber: number;

  myFunc(myParam: number): string;
}

class myClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `${this.myNumber + myParam}`;
  }
}

const obj = new myClass(5);

console.log(obj.myNumber);
console.log(obj.myFunc(10));