const name=document.getElementById('name');
const email=document.getElementById('email');
const pass=document.getElementById('pass');
const login=document.getElementById('login');
const Gender=document.getElementById('Gender');

const resultElement=document.getElementById('result');
login.addEventListener('click',()=>{
    console.log(name.value,pass.value,email.value);
    resultElement.innerText=`name:${name.value},password:${pass.value}`;

})



