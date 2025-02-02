document.addEventListener("DOMContentLoaded", () => {
  // Extract orderId from URL
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("orderId");

  // Mock order data (replace with API calls or database in production)
  const ordersData = {
    "27cba69d-4c3d-4098-b42d-ac7fa62b7664": {
      deliveryDate: "Monday, June 13",
      productName: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      quantity: 1,
      imageSrc: "images/products/athletic-cotton-socks-6-pairs.jpg",
      status: "Shipped",
    },
    "b6b6c212-d30e-4d4a-805d-90b52ce6b37d": {
      deliveryDate: "Wednesday, June 17",
      productName: "Intermediate Size Basketball",
      quantity: 2,
      imageSrc: "images/products/intermediate-composite-basketball.jpg",
      status: "Delivered",
    },
  };

  // Select HTML elements to populate
  const deliveryDateEl = document.getElementById("delivery-date");
  const productNameEl = document.getElementById("product-name");
  const productQuantityEl = document.getElementById("product-quantity");
  const productImageEl = document.getElementById("product-image");
  const preparingStatusEl = document.getElementById("preparing-status");
  const shippedStatusEl = document.getElementById("shipped-status");
  const deliveredStatusEl = document.getElementById("delivered-status");
  const progressBarEL = document.querySelector('.progress-bar');

  // Check if the orderId exists in the data
  if (ordersData[orderId]) {
    const orderDetails = ordersData[orderId];

    // Update tracking information
    deliveryDateEl.textContent = `Arriving on ${orderDetails.deliveryDate}`;
    productNameEl.textContent = orderDetails.productName;
    productQuantityEl.textContent = `Quantity: ${orderDetails.quantity}`;
    productImageEl.src = orderDetails.imageSrc;

    // Update progress status
    if (orderDetails.status === "Preparing") {
      preparingBarEl.style.width='33%';
    }else if(orderDetails.status === 'Shipped'){ 
      progressBarEL.style.status ='66%'; 
    }else if(orderDetails.status === 'Delivered'){ 
      progressBarEL.style.width='100%'; 
    }
  } else {
    // If orderId is invalid, display an error message
    document.querySelector(".order-tracking").innerHTML = `
      <p>Order not found. Please check the order ID and try again.</p>
    `;
  }
});
