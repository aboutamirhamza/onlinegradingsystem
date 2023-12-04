let inputfield = document.querySelector(".inputfield");
let grade = document.querySelector(".grade");
let error = document.querySelector(".error");
let btn = document.querySelector(".btn");

btn.addEventListener("click",function(){
    if(inputfield.value >= 90 && inputfield.value <= 100){
        grade.innerHTML = "(Your Grade Golden A+) " + inputfield.value;
    }else if(inputfield.value >= 80 && inputfield.value <= 89){
        grade.innerHTML = "(Your Grade A+) " + inputfield.value;
    }else if(inputfield.value >= 70 && inputfield.value <= 79){
        grade.innerHTML = "(Your Grade A) " + inputfield.value;
    }else if(inputfield.value >= 60 && inputfield.value <= 69){
        grade.innerHTML = "(Your Grade B+) " + inputfield.value;
    }else if(inputfield.value >= 50 && inputfield.value <= 59){
        grade.innerHTML = "(Your Grade B) " + inputfield.value;
    }else if(inputfield.value >= 40 && inputfield.value <= 49){
        grade.innerHTML = "(Your Grade C) " + inputfield.value;
    }else if(inputfield.value >= 33 && inputfield.value <= 39){
        grade.innerHTML = "(Your Grade D) " + inputfield.value;
    }else if(inputfield.value >= 32){
        error.innerHTML = "Sorry Better Luck Next Time Fail!*";
    }else if(inputfield.value < 0){
        error.innerHTML = "Negitive Value Not Allow*";
    }else if(inputfield.value > 100){
        error.innerHTML = "0-100 Range";
    }else{
        error.innerHTML = "Please Give Valid Number*";
    }
});

    
   

