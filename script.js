//getting all the html elements

const decrementBtn = document.getElementById("decrementBtn");
const IncrementBtn = document.getElementById("IncrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

//for decrement button click

decrementBtn.addEventListener("click",() => {
   const value = Number(displayValue.innerText);
   if(value > 0){
     displayValue.innerText = value - 1;
   }else{
    alert("Negative value is not allowed")
   }
});

//for increment button click

IncrementBtn.addEventListener("click",() => {
    const value = Number(displayValue.innerText);
    if(value >= 10){
        alert("10+ values are not allowed")
    }else{
        displayValue.innerText = value + 1
    }
});

//for reset button click

resetBtn.addEventListener("click",() =>{
    displayValue.innerText = 0
});
