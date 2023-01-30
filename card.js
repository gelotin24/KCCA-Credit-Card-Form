const form = document.querySelector('form');
const encode = document.querySelectorAll('input');
const inputField = document.querySelectorAll('.input-field');
const modal = document.querySelector('.modal');
const mClose = document.querySelector('.close');
const inputName = document.querySelector('.name-input');
const inputNumber = document.querySelector('.number-input');
const inputMonth = document.querySelector('.month-input');
const inputYear = document.querySelector('.year-input');
const inputCVC = document.querySelector('.cvc-input');

form.addEventListener('submit',(s)=>{
    s.preventDefault();
    modal.style.display = "flex";
    encode.forEach(input=>{
        if(input.classList.contains('name-input')){
            displayName(input)
        }else if(input.classList.contains('date')){
            displayDate(input)
        }else{
            displayOthers(input)
        }

        if (input.parentElement.classList.contains('error-empty') ||
            input.parentElement.classList.contains('error-invalid') ||
            input.parentElement.parentElement.classList.contains('error-invalid') ||
            input.parentElement.parentElement.classList.contains('error-empty')) {
            modal.style.display = 'none';
        }
    })
})
const displayName = function(input){
    if(input.value === ''){
        input.parentElement.classList.add('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) !== null){
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.add('error-invalid');
    }
    else{
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }
}
const displayDate = function(input){
    if(input.value === ''){
        input.parentElement.parentElement.classList.add('error-empty');
        input.parentElement.parentElement.classList.remove('error-invalid');
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) === null){ 
        input.parentElement.parentElement.classList.remove('error-empty');
        input.parentElement.parentElement.classList.add('error-invalid');
    }else{
        input.parentElement.parentElement.classList.remove('error-empty');
        input.parentElement.parentElement.classList.remove('error-invalid');
    }
}
const displayOthers = function(input){
    if(input.value === ''){
        input.parentElement.classList.add('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }else if(input.value !== '' && input.value.match(/^[0-9]+$/) === null){
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.add('error-invalid');
    }else{
        input.parentElement.classList.remove('error-empty');
        input.parentElement.classList.remove('error-invalid');
    }
}
mClose.addEventListener('click',()=>{
    modal.style.display = "none";
})

inputName.addEventListener('input',(s)=>{
    document.querySelector('.name-output').textContent = s.target.value;
})

inputNumber.addEventListener('input',(s)=>{
    let numberFormat = s.target.value.toString().replace(/\d{4}(?=.)/g, '$& ');
    document.querySelector('.number-output').textContent = numberFormat;
})

inputMonth.addEventListener('input',(s)=>{
    monthFormat = ('0' + s.target.value).slice(-2);
    document.querySelector('.month-output').textContent = monthFormat;
})

inputYear.addEventListener('input',(s)=>{
    yearFormat = ('0' + s.target.value).slice(-2);
    document.querySelector('.year-output').textContent = yearFormat;
})

inputCVC.addEventListener('input',(s)=>{
    document.querySelector('.cvc-output').textContent = s.target.value;
})