function scrollToSeatSelection(){
    window.scrollTo(0,2000);
}

function seatSelected(elementId){
    const element = document.getElementById(elementId);
    const allStyle = window.getComputedStyle(element);
    const currentBackgroundColor = allStyle.backgroundColor;
    const totalSeatElement = document.getElementById('seat-left');
    const totalSeat = totalSeatElement.innerText;
    const seatSelectedElement = document.getElementById('total-seat-selected');
    const seatSelected = seatSelectedElement.innerText;
    const selectedSeatValue = element.innerText;
    const appendSelectedSeat = document.getElementById("seat");

    const newSeat = document.createElement('div');
    newSeat.setAttribute('id', element.innerText+1);
    newSeat.innerHTML = '<p>' + selectedSeatValue + '</p>' + '<p>Economy</p>' + '<p>550</p>';

    console.log(currentBackgroundColor,totalSeat,seatSelected);
    if(currentBackgroundColor !== 'rgb(29, 209, 0)'){
        element.style.backgroundColor = 'rgb(29, 209, 0)';
        element.style.color = 'rgb(255, 255, 255)';
        document.getElementById('seat-left').innerText = parseInt(totalSeat) - 1;
        document.getElementById('total-seat-selected').innerText = parseInt(seatSelected) + 1;
        appendSelectedSeat.appendChild(newSeat);
        newSeat.style.display = "flex";
        newSeat.style.gap = "60px";
        const grossTotal = document.getElementById('gross-total');
        grossTotal.innerText = document.getElementById('total-seat-selected').innerText * 550;
    }
    else{
        element.style.backgroundColor = 'rgb(247, 248, 248)';
        element.style.color = 'rgba(3, 7, 18, 0.5)';
        document.getElementById('seat-left').innerText = parseInt(totalSeat) + 1;
        document.getElementById('total-seat-selected').innerText = parseInt(seatSelected) - 1;
        const grossTotal = document.getElementById('gross-total');
        grossTotal.innerText = document.getElementById('total-seat-selected').innerText * 550;
    }
}

function getCouponCode(){
    const element = document.getElementById('coupon-code');
    const coupon = element.value;
    console.log(coupon);
}