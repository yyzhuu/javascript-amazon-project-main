//import '../data/cart-class.js';
import { loadCart } from "../data/cart.js";
import { loadProductsFetch } from "../data/products.js";
//import '../data/backend-practice.js';


async function loadPage() { 
  console.log('load page')

  await loadProductsFetch(); //render products

  await loadCart(); 

  renderOrderSummary(); 
  renderPaymentSummary(); 

}
loadPage(); 

/*
//run multiple Promises 
Promise.all([ 
  loadProductsFetch(), //returns promise 
  /*new Promise((resolve) => { 
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
  //renderOrderSummary(); 
 // renderPaymentSummary(); 

}); 
*/

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