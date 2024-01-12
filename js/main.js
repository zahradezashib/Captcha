let data="abcdefghijklmnopqrstuvwxyz0123456789"
let btn=document.querySelector("a")
console.log(data.length);
let h1=document.querySelector("h1")
changeCaptcha()
btn.addEventListener("click",function(){
    changeCaptcha()
})
function changeCaptcha(){
    let captcha=data.charAt(Math.random()*36)+data.charAt(Math.random()*36)+data.charAt(Math.random()*36)+data.charAt(Math.random()*36)
    h1.innerText=captcha
}