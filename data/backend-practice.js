

const xhr = new XMLHttpRequest(); //http message 

xhr.addEventListener('load', () => { 
  console.log(xhr.response) //after response is loaded 
}); //wait for response 

xhr.open('GET', 'http://supersimplebackend.dev/documentation'); //type of http request 
xhr.send(); //asynchronous 
