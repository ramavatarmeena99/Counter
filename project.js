let value = document.querySelector(".value")
let count = 0
let count2 = 1
let plusbtn = document.querySelector(".plus");
let minusbtn = document.querySelector(".minus");
let resetbtn = document.querySelector(".reset")
let onebtn = document.querySelector(".one")
let twobtn = document.querySelector(".two")
let threebtn = document.querySelector(".three")
let fourbtn = document.querySelector(".four")
let fivebtn = document.querySelector(".five")
let clickbtn = document.querySelector(".clickhere")


plusbtn.addEventListener("click", function(){
    value.textContent = count++
})


minusbtn.addEventListener("click", function(){
value.textContent = count-- 
})

resetbtn.addEventListener("click", function(){
value.textContent = 0
count = 0
count2 = 1
resetbtn.textContent = "ram"
})

onebtn.addEventListener("click", function(){
    value.textContent = count++
})

twobtn.addEventListener("click", function(){
    value.textContent = count2 *2
    count2 = count2 + 1

})
threebtn.addEventListener("click", function(){
    value.textContent = count2 *3
    count2 = count2 + 1

})
 fourbtn.addEventListener("click", function(){
    value.textContent = count2 *4
    count2 = count2 + 1

})

fivebtn.addEventListener("click", function(){
    value.textContent = count2 *5
    count2 = count2 + 1
})

clickbtn.addEventListener("click", function(){

})