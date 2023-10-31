"use strict";

window.onload = init;

function init() {
  const bookingBtn = document.getElementById("bookingBtn");
  bookingBtn.onclick = bookingBtnClicked;
}

function getRoomRate(checkInDate) {

  const checkInDateConfirmation = new Date(checkInDate);
  checkInDateConfirmation = new Date(checkInDate).getMonth() + 1;
  const checkInMonth = checkInDateConfirmation.getMonth() + 1;
  const year = checkInDateConfirmation.getFullYear();

  let season;
  const currentDate = new Date();
  const peakSeason = currentMonth >= 5 && currentMonth <= 7;

  if (checkInMonth >= 6 && checkInMonth <= 8) {
    season = peakSeason;
  }

  let roomRate;
  peakSeason = 100.00
  if (twoBdSuite) {
    peakSeason = 140.00;
  }
  const queenRoom = 150.00;
  const kingRoom = 150.00;
  const twoBdSuite = 210.00;

  if (queenRoom) {
    roomRate = (queenRoom + peakSeason);
  }

  else if (kingRoom) {
    roomRate = (kingRoom + peakSeason);
  }

  else if (twoBdSuite) {
    peakSeason = (twoBdSuite + peakSeason);
  }
  return (roomRate);
}

function bookingBtnClicked() {

  const inputNumNights = document.getElementById("numNights");
  let numNights = Number(inputNumNights.value);

  const inputNumAdults = document.getElementById("numAdults");
  let numAdults = Number(inputNumAdults);

  const inputNumChildren = document.getElementById("numChildren");
  let numChildren = Number(inputNumChildren);

  const messageDiv = ("The room you selected will not hold your party")

  // Room Type

  const queenRoom = document.getElementById('queenRadio');
  const kingRoom = document.getElementById('kingRadio');
  const twoBdSuite = document.getElementById('2bdRadio');

  let roomType = 0;
  if (queenRoom.checked) {
    roomType = queenRoom;
  }
  else if (kingRoom.checked) {
    roomType = kingRoom;
  }
  else if (twoBdSuite.checked) {
    roomType = twoBdSuite;
  }

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
    return (messageDiv);
  }


  // Discounts 

  let discounts;
  if (seniorRadio.checked) {
    seniorRadio = .10;
  }
  if (militaryRadio.checked) {
    militaryRadio = .20;
  }
  else if (noneRadio.checked) {
    noneRadio = 0;
  }

  // Total Cost of Stay 

  const baseRoomCost = roomRate * numNights;
  const discount = baseRoomCost * discounts;
  const afterDiscounts = baseRoomCost - discount;
  const tax = afterDiscounts * .12;
  const totalCost = afterDiscounts + tax;

  const outputBaseTotalCost = document.getElementById('outputBaseTotalCost');
  outputBaseTotalCost.innerHTML = "$" + baseRoomCost.toFixed(2);

  const outputDiscounts = document.getElementById('outputDiscounts');
  outputDiscounts.innerHTML = "$" + outputDiscounts.toFixed(2);

  const outputTax = document.getElementById('outputTax');
  outputTax.innerHTML = "$" + tax.toFixed(2);

  const outputTotalCost = document.getElementById('outputTotalCost');
  outputTotalCost.innerHTML = "$" + totalCost.toFixed(2);

  // Confirmation Number
  const checkInDateConfirmation = new Date(checkInDate);
  const month = checkInDateConfirmation.getMonth() + 1;
  const year = checkInDateConfirmation.getFullYear();
  const confirmationNumber = inputName.substr(0, 3) + "-" + month + year + "-" + numNights + ":" + numAdults + ":" + numChildren;
  document.getElementById('confirmationNumber').innerHTML = confirmationNumber;
}



