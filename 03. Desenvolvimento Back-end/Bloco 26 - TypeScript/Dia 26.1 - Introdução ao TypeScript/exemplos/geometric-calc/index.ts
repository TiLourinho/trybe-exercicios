import * as Exercise from './exercises';

let pi: number = 3.14;

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(100, 200)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(100)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(100, 200)}cm²`);

console.log(`Losango com diagonal maior de 32cm e diagonal menor de 18cm: ${Exercise.rhombus(32, 18)}cm²`);
console.log(`Losango com diagonal maior de 200cm e diagonal menor de 50cm: ${Exercise.rhombus(200, 50)}cm²`);
console.log(`Losango com diagonal maior de 75cm e diagonal menor de 25cm: ${Exercise.rhombus(75, 25)}cm²`);

console.log(`Trapézio de base maior 100cm, base menor de 70cm e altura de 50cm: ${Exercise.trapezoid(50, 100, 70)}cm²`);
console.log(`Trapézio de base maior 75cm, base menor de 50cm e altura de 35cm: ${Exercise.trapezoid(35, 75, 50)}cm²`);
console.log(`Trapézio de base maior 150cm, base menor de 120cm e altura de 80cm: ${Exercise.trapezoid(80, 150, 120)}cm²`);

console.log(`Círculo de raio 25cm: ${Exercise.circle(25, pi)}cm²`);
console.log(`Círculo de raio 100cm: ${Exercise.circle(100, pi)}cm²`);
console.log(`Círculo de raio 12,5cm: ${Exercise.circle(12.5, pi)}cm²`);