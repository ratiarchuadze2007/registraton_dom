const input_1 = document.getElementById("input_1");
const input_2 = document.getElementById("input_2");
const input_3 = document.getElementById("input_3");
const input_4 = document.getElementById("input_4");

const span_1 = document.getElementById("erorText_1")
const span_2 = document.getElementById("erorText_2")
const span_3 = document.getElementById("erorText_3")
const span_4 = document.getElementById("erorText_4")

const div = document.querySelector("inputCoontainer")

const button = document.querySelector("button")
console.log (div)

button.addEventListener("click", () => {
    // if(input_1.value === "" ||
    //    input_2.value === "" ||
    //    input_3.value ==="" ||
    //    input_4.value ===""){
        
     
    //     span_1.style.display = "flex";
    //     input_1.style.border = "2px solid #FF7979";
    //     span_2.style.display = "flex";
    //     span_3.style.display = "flex";
    //     span_4.style.display = "flex";
    // }
    if(input_1.value === "" ){
        span_1.style.display = "flex";
        input_1.style.border = "2px solid #FF7979";
        input_1.placeholder = "";
        input_1.style.background = "url(./images/1.png) no-repeat right 27px top 16px";

    }if(input_2.value === ""){
        span_2.style.display = "flex";
        input_2.style.border = "2px solid #FF7979";
        input_2.placeholder = "";
        input_2.style.background = "url(./images/1.png) no-repeat right 27px top 16px";

    }if(input_3.value === ""){
        span_3.style.display = "flex";
        input_3.style.border = "2px solid #FF7979";
        input_3.placeholder = "email@example/com";
        input_3.placeholder.color = "red"
        input_3.style.background = "url(./images/1.png) no-repeat right 27px top 16px";
        input_3.style.setProperty('--placeholder-color', ' #FF7979'); 

    }if(input_4.value === ""){
    span_4.style.display = "flex";
    input_4.style.border = "2px solid #FF7979";
    input_4.placeholder = "";
    input_4.style.background = "url(./images/1.png) no-repeat right 27px top 16px";}
    

    if(input_1.value !==""&&
    input_2.value !== ""&&
    input_3.value !==""&&
    input_4.value !== ""
      ){
        input_1.value = "";
        input_2.value = "";
        input_3.value = "";
        input_4.value = "";

        input_1.style.background = "none"
        input_2.style.background = "none"
        input_3.style.background = "none"
        input_4.style.background = "none"

        span_1.style.display = "none";
        span_2.style.display = "none";
        span_3.style.display = "none";
        span_4.style.display = "none";

        input_1.style.border = "1.5px solid #DEDEDE";
        input_2.style.border = "1.5px solid #DEDEDE";
        input_3.style.border = "1.5px solid #DEDEDE";
        input_4.style.border = "1.5px solid #DEDEDE";

        input_1.placeholder = "First Name";
        input_2.placeholder = "Last Name";
        input_3.placeholder = "Email Address";
        input_4.placeholder = "Password";

        input_3.style.setProperty('--placeholder-color', ' gray'); 
      }
    


})