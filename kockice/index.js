function randomnum(){
    return Math.floor(Math.random()*6)+1;
}

let randnum1=randomnum();
let randnum2=randomnum();

/* console.log(randnum1+" "+randnum2); */

let randimgsrc1 = "./images/dice" + randnum1 + ".png"
/* putanja do slike */
let randimgsrc2="./images/dice" + randnum2 + ".png"

document.querySelectorAll("img")[0].setAttribute("src",randimgsrc1);
document.querySelectorAll("img")[1].setAttribute("src",randimgsrc2);

if(randnum1>randnum2){
    document.querySelector("h1").textContent="1 WINNO"
}
else if(randnum1<randnum2){
    document.querySelector("h1").textContent="2 WINNO"
}
else{
    document.querySelector("h1").textContent="TIE"
}












