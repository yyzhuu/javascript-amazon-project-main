//import '../data/cart-class.js';
import { loadCart } from "../data/cart.js";
import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
//import '../data/backend-practice.js';

//run multiple Promises 
Promise.all([ 
  new Promise((resolve) => { 
    loadProducts(() => { //wait for asynchronous code to finish 
      resolve('value1'); //resolve signals the start of next code 
    }); 
  }), 
  new Promise((resolve) => { 
    loadCart(() => { 
      resolve(); 
    })
  })
]).then(() => { 
  renderOrderSummary(); 
  renderPaymentSummary(); 

}); 

/* callback 
new Promise((resolve) => { 
  loadProducts(() => { //wait for asynchronous code to finish 
    resolve('value1'); //resolve signals the start of next code 
  })
}).then((value) => { 
  console.log(value)
  return new Promise((resolve) => { 
    loadCart(() => { 
      resolve(); 
    })
  })
}).then(() => { 
  renderOrderSummary(); 
  renderPaymentSummary(); 

}) 
*/

/* multiple nesting 
loadProducts(() => { //anonymous function 
  loadCart(() => { 
    renderOrderSummary(); 
    renderPaymentSummary(); 
  })
})
*/