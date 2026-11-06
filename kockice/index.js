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













