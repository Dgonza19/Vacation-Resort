"use strict";

window.onload = init;

function init() {
  const bookingBtn = document.getElementById("bookingBtn");
  bookingBtn.onclick = bookingBtnClicked;
}

function getRoomRate(checkInDate) {
  const inputName = document.getElementById('inputName').value;
  const checkInDateConfirmation = new Date(checkInDate);
  const checkInMonth = checkInDateConfirmation.getMonth() + 1;

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const peakSeason = currentMonth >= 6 && currentMonth <= 8;

  let roomRate;
  let peakSeasonRate = 100.00;
  const queenRoom = 150.00;
  const kingRoom = 150.00;
  const twoBdSuite = 210.00;

  if (checkInMonth >= 5 && checkInMonth <= 7) {
    peakSeasonRate = 140.00;
  }

  if (queenRoom) {
    if (peakSeason) {
      roomRate = queenRoom + peakSeasonRate;
    } else {
      roomRate = queenRoom;
    }
  } else if (kingRoom) {
    if (peakSeason) {
      roomRate = kingRoom + peakSeasonRate;
    } else {
      roomRate = kingRoom;
    }
  } else if (twoBdSuite) {
    if (peakSeason) {
      roomRate = twoBdSuite + peakSeasonRate;
    } else {
      roomRate = twoBdSuite;
    }
  }

  return roomRate;
}
// Guests
function bookingBtnClicked() {
  const inputNumNights = document.getElementById("numNights");
  const inputNumAdults = document.getElementById("numAdults").value;
  const inputNumChildren = document.getElementById("numChildren").value;

  let numNights = Number(inputNumNights.value);
  let numAdults = Number(inputNumAdults.value);
  let numChildren = Number(inputNumChildren.value);

  const displayErrorMessage = document.getElementById("errorMessage");
  let errorMessage = ("The room you selected will not hold your party"); s

  // Room Type

  let maxOccupancy;
  if (queenRoom.checked) {
    maxOccupancy <= 5;
  }
  if (kingRoom.checked) {
    maxOccupancy <= 2;
  }
  if (twoBdSuite.checked) {
    maxOccupancy <= 6;
  }
  else {
    return (errorMessage.innerHTML);
  }

  // Discounts
  let discounts;
  if (noneRadio.checked) {
    seniorRadio = .0;
  }
  if (seniorRadio.checked) {
    militaryRadio = .10;
  }
  else if (militaryRadio.checked) {
    noneRadio = .20;
  }

  // Total Cost of Stay 
  const baseRoomCost = roomRate * numNights;
  const discount = baseRoomCost * discounts;
  const afterDiscounts = baseRoomCost - discount;
  const tax = afterDiscounts * .12;
  const totalCost = afterDiscounts + tax;

  const outputBaseRoomCost = document.getElementById('outputBaseRoomCost');
  outputBaseRoomCost.innerHTML = "$" + baseRoomCost.toFixed(2);

  const outputDiscounts = document.getElementById('outputDiscounts');
  outputDiscount.innerHTML = "$" + afterDiscounts.toFixed(2);

  const outputTax = document.getElementById('outputTax');
  outputTax.innerHTML = "$" + tax.toFixed(2);

  const outputTotalCost = document.getElementById('outputTotalCost');
  outputTotalCost.innerHTML = "$" + totalCost.toFixed(2);

  // Confirmation Number
  const checkInDateConfirmation = new Date(checkInDate);
  const month = checkInDateConfirmation.getMonth() + 1;
  const year = checkInDateConfirmation.getFullYear();
  const confirmationNumber = inputName.substr(0, 3) + "-" + month + year + "-" + numNights + ":" + inputNumAdults + ":" + inputNumChildren;
  document.getElementById('confirmationNumber').innerHTML = confirmationNumber;

}
