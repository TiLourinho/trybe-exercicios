// Parte 1
// 1.

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const userName = order.name;
  const userPhoneNumber = order.phoneNumber;
  const userAddress = order.address.street;
  const userAddressNumber = order.address.number;
  const userAddressApartment = order.address.apartment;

  const orderInfo = `Olá ${deliveryPerson}, entrega para: ${userName}, Telefone: ${userPhoneNumber}, R. ${userAddress}, Número: ${userAddressNumber}, AP: ${userAddressApartment}.`
  
  return orderInfo;
}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment = 50;

  const userName = order.name;
  const food = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const price = order.payment;

  const orderInfo = `Olá ${userName}, o total do seu pedido de ${food[0]}, ${food[1]} e ${drink} é R$ ${price},00`;
  
  return orderInfo;
}

orderModifier(order);

// Parte 2

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1.
const turnoNoite = (obj, key, val) => {
  obj[key] = val;
}
turnoNoite(lesson2, 'turno', 'noite');

// 2.
const listKey = obj => Object.keys(obj);

listKey(lesson3);

// 3. 
const objLength = obj => Object.keys(obj).length;

objLength(lesson1);

// 4.
const listValues = obj => Object.values(obj);

listValues(lesson2);

// 5.
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// 6.
const totalStudents = obj => {
  let total = 0;
  const arr = Object.keys(obj);

  for (i in arr) {
    total += obj[arr[i]].numeroEstudantes;
  }
  return total;
}
console.log(totalStudents(allLessons));