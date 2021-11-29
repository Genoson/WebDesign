/**
 * javaScript functionality for the online ordering page
 */

// handling the customer information form and returning a customized message

let customerInfo = document.forms.custForm;

customerInfo.addEventListener("submit", function (e) {
  let custName = document.querySelector("#custName");
  let custEmail = document.querySelector("#email");
  let custPhone = document.querySelector("#phone");
  let custAddress = document.querySelector("#address");
  let custCity = document.querySelector("#city");
  let greeting = document.querySelector("#personalGreet");

  greeting.innerHTML = "";
  if (
    custName.value === "" ||
    custEmail.value === "" ||
    custPhone.value === "" ||
    custAddress.value === "" ||
    custCity.value === ""
  ) {
    greeting.innerHTML =
      '<p id="custGreet">Please fill out the customer details form completely.</p>';
  } else {
    greeting.innerHTML = `<p id="custGreet">Hello ${custName.value}. 
  Thanks for choosing Gary's Blue Diner.
  Please use the form below to place your order.
  A confirmation email will be sent to ${custEmail.value}.
  The order will be delivered to ${custAddress.value}, ${custCity.value},
  if delivery is selected below.
  Payment will be processed at time of pick up/ delivery.
  Please contact us at (709)555-5555 if you have any concerns about the process.</p>`;
  }
  e.preventDefault();
});

// defining price constants for the order form and placing them in an array

const taxRate = 0.15;
const fishAndChipsPrice = 18.99;
const squidRingsPrice = 15.99;
const redFishWhiteFishPrice = 33.99;
const thaiRedOctopusSoupPrice = 13.99;
const savouryStuffedSquidPrice = 17.99;
const scallopsPrice = 21.99;
const crustedCodPrice = 25.99;
const roastedRootMedleyPrice = 11.99;
const prawnLinguinePrice = 27.99;
const meWholeTroutPrice = 24.99;
const fishStickStackerPrice = 19.99;
const seafoodPlatterPrice = 39.99;
const deliveryFee = 15.0;

priceArray = [
  fishAndChipsPrice,
  squidRingsPrice,
  redFishWhiteFishPrice,
  thaiRedOctopusSoupPrice,
  savouryStuffedSquidPrice,
  scallopsPrice,
  crustedCodPrice,
  roastedRootMedleyPrice,
  prawnLinguinePrice,
  meWholeTroutPrice,
  fishStickStackerPrice,
  seafoodPlatterPrice,
];

// Handling the order form submission and processing it into a receipt style output

let orderInfo = document.querySelector("#orderForm");
let confirmationZone = document.querySelector("#orderConfirmation");

orderInfo.addEventListener("submit", function (e) {
  let pickUp = document.querySelector("#pickUp");
  let delivery = document.querySelector("#delivery");
  let cutlery = document.querySelector("#cutlery");
  let cutleryQuantity = document.querySelector("#cutleryQuantity");
  let fishAndChipsQuantity = document.querySelector("#item1");
  let squidRingsQuantity = document.querySelector("#item2");
  let redFishWhiteFishQuantity = document.querySelector("#item3");
  let thaiRedOctopusSoupQuantity = document.querySelector("#item4");
  let savouryStuffedSquidQuantity = document.querySelector("#item5");
  let scallopsQuantity = document.querySelector("#item6");
  let crustedCodQuantity = document.querySelector("#item7");
  let roastedRootMedleyQuantity = document.querySelector("#item8");
  let prawnLinguineQuantity = document.querySelector("#item9");
  let meWholeTroutQuantity = document.querySelector("#item10");
  let fishStickStackerQuantity = document.querySelector("#item11");
  let seafoodPlatterQuantity = document.querySelector("#item12");

  let orderItems = [
    fishAndChipsQuantity,
    squidRingsQuantity,
    redFishWhiteFishQuantity,
    thaiRedOctopusSoupQuantity,
    savouryStuffedSquidQuantity,
    scallopsQuantity,
    crustedCodQuantity,
    roastedRootMedleyQuantity,
    prawnLinguineQuantity,
    meWholeTroutQuantity,
    fishStickStackerQuantity,
    seafoodPlatterQuantity,
  ];

  let itemCost = [];
  let subtotal = 0;
  for (let i = 0; i < 12; i++) {
    let temp;
    temp = orderItems[i].value * priceArray[i];
    subtotal += temp;
    itemCost.push(temp);
  }

  let deliveryCost = 0;
  let deliveryMessage = "";
  if (delivery.checked === true) {
    deliveryCost = deliveryFee;
    deliveryMessage = `Delivery Fee: $${deliveryCost} <br>`;
  }
  let hst = subtotal * taxRate;
  let total = subtotal + hst + deliveryCost;

  let orderType = "";
  if (pickUp.checked === true) {
    orderType = "pick up";
  } else {
    orderType = "delivery";
  }

  let cutleryMessage = "";
  if (cutlery.checked === true) {
    cutleryMessage = `${cutleryQuantity.value} sets of cutlery will be included with this order.`;
  }

  let orderSummary = "";
  for (let i = 0; i < 12; i++) {
    let tempMess = "";
    if (orderItems[i].value != 0) {
      tempMess = `${orderItems[i].name} x ${orderItems[i].value}: $${itemCost[
        i
      ].toFixed(2)} <br>`;
    }
    orderSummary += tempMess;
  }

  confirmationZone.innerHTML = `<p id="orderMessage">Thank you for placing a ${orderType} order. <br>
  ${cutleryMessage} <br>
  You have ordered: <br>
  ${orderSummary}
  ==============================<br>
  Subtotal: $${subtotal.toFixed(2)} <br>
  HST @ 15%: $${hst.toFixed(2)} <br>
  ${deliveryMessage}
  ==============================<br>
  Total: $${total.toFixed(2)}
  </p>`;

  e.preventDefault();
});
