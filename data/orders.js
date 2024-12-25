export const orders = JSON.parse(localStorage.getItem('orders')) || []

export function addOrder(order){ 
  orders.unshift(); //add order from the front
}

function saveToStorage() { 
  localStorage.setItem('orders', JSON.stringify(orders))
}