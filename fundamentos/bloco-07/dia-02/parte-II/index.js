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
      },
      guarana: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
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
  const message = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, N°: ${order.address.number}, AP: ${order.address.apartment}`;
  console.log(message);
}

customerInfo(order);

const listOrderPizzas = (order) => {
  const pizzasObject = order.order.pizza;
  return Object.keys(pizzasObject).join(', ');
}

const formatNumberToCurrency = (number) => {
  return number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

const orderModifier = (order) => {
  const newOrder = Object.assign({}, order);
  newOrder.name = 'Luiz Silva';
  newOrder.payment = 50;
  const formatedPayment = formatNumberToCurrency(newOrder.payment);
  const listOfPizzas = listOrderPizzas(newOrder);
  const listOfDrinks = newOrder.order.drinks.coke.type;
  const message = `Olá ${newOrder.name}, o total do seu pedido de ${listOfPizzas} e ${listOfDrinks} é ${formatedPayment}.`;
  console.log(message);
}

orderModifier(order);