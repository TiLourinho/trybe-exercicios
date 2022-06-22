"use strict";
class ConsoleLogger {
    log(param) {
        console.log('ConsoleLogger', param);
    }
}
class ConsoleLogger2 {
    log(param) {
        console.log('ConsoleLogger2', param);
    }
}
class ExampleDatabase {
    constructor(logger = new ConsoleLogger()) {
        this.logger = logger;
    }
    save(key, value) {
        this.logger.log(`${key} and ${value}`);
    }
}
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
