function scrollToSeatSelection() {
  window.scrollTo(0, 2000);
}

function seatSelected(elementId) {
  const element = document.getElementById(elementId);
  const allStyle = window.getComputedStyle(element);
  const currentBackgroundColor = allStyle.backgroundColor;
  const totalSeatElement = document.getElementById("seat-left");
  const totalSeat = totalSeatElement.innerText;
  const seatSelectedElement = document.getElementById("total-seat-selected");
  const seatSelected = seatSelectedElement.innerText;
  const numberOfSeats = parseInt(seatSelected);
  const selectedSeatValue = element.innerText;
  const appendSelectedSeat = document.getElementById("seat");

  const newSeat = document.createElement("div");
  newSeat.setAttribute("id", element.innerText + 1);
  newSeat.innerHTML =
    "<p>" + selectedSeatValue + "</p>" + "<p>Economy</p>" + "<p>550</p>";
  if (currentBackgroundColor !== "rgb(29, 209, 0)" && numberOfSeats < 4) {
    element.style.backgroundColor = "rgb(29, 209, 0)";
    element.style.color = "rgb(255, 255, 255)";
    document.getElementById("seat-left").innerText = parseInt(totalSeat) - 1;
    document.getElementById("total-seat-selected").innerText =
      parseInt(seatSelected) + 1;
    appendSelectedSeat.appendChild(newSeat);
    newSeat.style.display = "flex";
    newSeat.style.gap = "60px";
    const grossTotal = document.getElementById("gross-total");
    grossTotal.innerText =
      document.getElementById("total-seat-selected").innerText * 550;
      document.getElementById('grand-total').innerText = document.getElementById("total-seat-selected").innerText * 550;
  } 
  else {
    if(numberOfSeats >= 4){
        if(currentBackgroundColor == "rgb(29, 209, 0)"){
            element.style.backgroundColor = "rgb(247, 248, 248)";
    element.style.color = "rgba(3, 7, 18, 0.5)";
    document.getElementById("seat-left").innerText = parseInt(totalSeat) + 1;
    document.getElementById("total-seat-selected").innerText =
      parseInt(seatSelected) - 1;
    const grossTotal = document.getElementById("gross-total");
    grossTotal.innerText =
      document.getElementById("total-seat-selected").innerText * 550;
        }
    }
    else{
        element.style.backgroundColor = "rgb(247, 248, 248)";
    element.style.color = "rgba(3, 7, 18, 0.5)";
    document.getElementById("seat-left").innerText = parseInt(totalSeat) + 1;
    document.getElementById("total-seat-selected").innerText =
      parseInt(seatSelected) - 1;
    const grossTotal = document.getElementById("gross-total");
    grossTotal.innerText =
      document.getElementById("total-seat-selected").innerText * 550;
    }
  }
}

// use coupon code

function getCouponCode() {
  const element = document.getElementById("coupon-code");
  const coupon = element.value;
  const selectedSeatElement = document.getElementById('total-seat-selected');
  const totalSeatText = selectedSeatElement.innerText;
  const totalSeat = parseInt(totalSeatText);
  const grossTotalElement = document.getElementById("gross-total");
  const grossTotal = parseInt(grossTotalElement.innerText);
  
  if (coupon == "NEW15" && totalSeat >= 4) {
    document.getElementById("grand-total").innerText = grossTotal - grossTotal * 0.15;
    const discountdiv = document.createElement('div');
    discountdiv.setAttribute('id', 'discount');
    discountdiv.innerHTML = "<p> Discount </p>" + "<p>" + grossTotal* 0.15 + "</p>";
    discountdiv.style.display= 'flex';
    discountdiv.style.justifyContent = 'space-between';
    discountdiv.style.marginLeft = '24px';
    discountdiv.style.marginRight = '24px';
    discountdiv.style.fontWeight = '500';
    const totallNDiscountParentDiv =document.getElementById('toalnDiscount');
    totallNDiscountParentDiv.appendChild(discountdiv);
    const inputFieldtElement = document.getElementById('coupon-input');
    inputFieldtElement.classList.add('hidden');
    
  }
  else if (coupon == "Couple 20" && totalSeat >= 4) {
    document.getElementById("grand-total").innerText = grossTotal - grossTotal * 0.20;
    const discountdiv = document.createElement('div');
    discountdiv.setAttribute('id', 'discount');
    discountdiv.innerHTML = "<p> Discount </p>" + "<p>" + grossTotal* 0.20 + "</p>";
    discountdiv.style.display= 'flex';
    discountdiv.style.justifyContent = 'space-between';
    discountdiv.style.marginLeft = '24px';
    discountdiv.style.marginRight = '24px';
    discountdiv.style.fontWeight = '500';
    const totallNDiscountParentDiv =document.getElementById('toalnDiscount');
    totallNDiscountParentDiv.appendChild(discountdiv);
    const inputFieldtElement = document.getElementById('coupon-input');
    inputFieldtElement.classList.add('hidden');
  }
  else {
    const discountdiv = document.createElement('div');
    discountdiv.setAttribute('id', 'discount');
    discountdiv.innerHTML = "<p> Discount </p>" + "<p>" + 0 + "</p>";
    discountdiv.style.display= 'flex';
    discountdiv.style.justifyContent = 'space-between';
    discountdiv.style.marginLeft = '24px';
    discountdiv.style.marginRight = '24px';
    discountdiv.style.fontWeight = '500';
    const totallNDiscountParentDiv =document.getElementById('toalnDiscount');
    totallNDiscountParentDiv.appendChild(discountdiv);
    const inputFieldtElement = document.getElementById('coupon-input');
    // inputFieldtElement.classList.add('hidden');
  }
}

// next button function

function next(){
    const element1 = document.getElementById('header');
    element1.classList.add('hidden');
    const element2 = document.getElementById('banner');
    element2.classList.add('hidden');
    const element3 = document.getElementById('offer');
    element3.classList.add('hidden');
    const element4 = document.getElementById('booking');
    element4.classList.add('hidden');
    const element6 = document.getElementById('footer');
    element6.classList.add('hidden');
    const element5 = document.getElementById('modal1');
    element5.classList.remove('hidden');
    
}

// continue button function

function Continue(){
    const element1 = document.getElementById('header');
    element1.classList.remove('hidden');
    const element2 = document.getElementById('banner');
    element2.classList.remove('hidden');
    const element3 = document.getElementById('offer');
    element3.classList.remove('hidden');
    const element4 = document.getElementById('booking');
    element4.classList.remove('hidden');
    const element6 = document.getElementById('footer');
    element6.classList.remove('hidden');
    const element5 = document.getElementById('modal1');
    element5.classList.add('hidden');
    
}