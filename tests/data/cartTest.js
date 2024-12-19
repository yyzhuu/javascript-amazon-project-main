import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: add to cart', () => {
  it('add an existing product to the cart', () => { 
    spyOn(localStorage, 'setItem'); //a mock only last for 1 test 
    
    spyOn(localStorage,'getItem').and.callFake(()=> {//overwrite orginal getItem 
      return JSON.stringify([{ 
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 
        quantity: 1, 
        deliveryOptionId: '1'
      }]); 
    }); 

    console.log(localStorage.getItem('cart'));
    loadFromStorage();  

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
    expect(cart.length).toEqual(1); 
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
    expect(cart[0].quantity).toEqual(2); 
  });

  it('add a new product to the cart', () => { 

    spyOn(localStorage, 'setItem'); 

    spyOn(localStorage,'getItem').and.callFake(()=> {//overwrite orginal getItem 
      return JSON.stringify([]); 
    }); 

    console.log(localStorage.getItem('cart'));
    loadFromStorage();  

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
    expect(cart.length).toEqual(1); 
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6'); 
    expect(cart[0].quantity).toEqual(1); 

  }); 
})