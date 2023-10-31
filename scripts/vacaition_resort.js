"use strict";

window.onload = init;

function init() {
  const bookingBtn = document.getElementById("bookingBtn");
  bookingBtn.onclick = bookingBtnClicked;
}

function getRoomRate(checkInDate, roomType) {
  checkInDate = document.getElementById("checkInDate");
  const checkInMonth = new Date(checkInDate.value).getMonth + 1;

  let peakSeasonRate = 100.00;

  const rates = {
    queenRoom: 150.00,
    kingRoom: 150.00,
    twoBdSuite: 210.00,
  };

  if (checkInMonth >= 6 && checkInMonth <= 8) {
    peakSeasonRate = 140.00;
  }

  let roomRate;

  if (roomType in rates) {
    roomRate = rates[roomType];
    if (checkInMonth >= 6 && checkInMonth <= 8) {
      roomRate += peakSeasonRate;
    }
  }
  return roomRate;
}


function bookingBtnClicked() {
  // Intake
  const inputName = document.getElementById('inputName');
  const inputNumNights = document.getElementById("numNights");
  let numNights = Number(inputNumNights.value);

  // Guest Quantity
  // const inputNumAdults = document.getElementById("numAdults").value;
  // let numAdults = Number(inputNumAdults.value);
  // const inputNumChildren = document.getElementById("numChildren").value;
  // let numChildren = Number(inputNumChildren.value);
  // const errorMessage = document.getElementById("errorMessage");


  // let maxOccupancy;
  //  if (queenRoomBtn.checked) {
  //    maxOccupancy <= 5;
  //  }
  //  if (kingRoomBtn.checked) {
  //    maxOccupancy <= 2;
  //  }
  //  if (twoBdSuiteBtn.checked) {
  //    maxOccupancy <= 6;
  //  }
  //  else {
  //    return (errorMessage.innerHTML);
  //  }

  // Room Type
  const queenRoomBtn = document.getElementById('queenRadio');
  const kingRoomBtn = document.getElementById('kingRadio');
  const twoBdSuiteBtn = document.getElementById('2bdRadio');

  const noDiscount = document.getElementById("noneRadio");
  const seniorDiscountBtn = document.getElementById("seniorRadio");
  const militaryDiscountBtn = document.getElementById("militaryRadio");

  let roomType = 0;
  if (queenRoomBtn.checked) {
    roomType = 'queenRoom';
  } else if (kingRoomBtn.checked) {
    roomType = 'kingRoom';
  } else if (twoBdSuiteBtn.checked) {
    roomType = 'twoBdSuite';
  }

  const roomRate = getRoomRate(checkInDate, roomType);

  // Discounts
  let discounts;
  if (noneRadio.checked) {
    discounts = .0;
  }
  else if (seniorRadio.checked) {
    discounts = .10;
  }
  else if (militaryRadio.checked) {
    discounts = .20;
  }


  // Total Cost of Stay 
  const baseRoomCost = roomRate * numNights;
  const discountOutput = baseRoomCost * discounts;
  const totalCostPostDiscount = baseRoomCost - discountOutput;
  const tax = totalCostPostDiscount * .12;
  const totalCost = totalCostPostDiscount + tax;

  const outputBaseRoomCost = document.getElementById("outputBaseRoomCost");
  outputBaseRoomCost.innerHTML = "$ " + baseRoomCost.toFixed(2);

  const outputDiscounts = document.getElementById("outputDiscounts");
  outputDiscounts.innerHTML = "$" + totalCostPostDiscount.toFixed(2);

  const outputTax = document.getElementById("outputTax");
  outputTax.innerHTML = "$" + tax.toFixed(2);

  const outputTotalCost = document.getElementById("outputTotalCost");
  outputTotalCost.innerHTML = "$" + totalCost.toFixed(2);

  // Confirmation Number
  // const month = checkInDateConfirmation.getMonth() + 1;
  // const year = checkInDateConfirmation.getFullYear();
  // const confirmationNumber = inputName.substr(0, 3) + "-" + month + year + "-" + numNights + ":" + numAdults + ":" + numChildren;
  // document.getElementById('confirmationNumber').innerHTML = confirmationNumber;
}




