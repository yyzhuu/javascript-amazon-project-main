//import '../data/cart-class.js';
import { loadCart } from "../data/cart.js";
import { loadProductsFetch } from "../data/products.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";

//import '../data/backend-practice.js';


async function loadPage() { 

  console.log('load page'); 

  try{ 

    //throw 'error'

    await loadProductsFetch(); //render products

    const value = await new Promise((resolve, reject) => { 

      //throw 'error2'
      loadCart(() => { 

        //reject('error3')
        resolve('value3')
      })
    })  

  }catch(error){ 
    console.log('Please try again later.')
  }

 // renderOrderSummary(); 
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