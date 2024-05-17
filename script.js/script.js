//creating variables:

let weight = document.querySelector('#weight')
let height = document.querySelector('#height')
let ans = document.querySelector('#ans')
let btn = document.querySelector('.btn')
let resp = document.querySelector('.response')

btn.addEventListener('click', ()=>{
    ans.value = eval(`${weight.value}/${height.value**2}`).toFixed(2)
    switch (true) {
        case ans.value<18.5:
            resp.innerText = 'Your BMI is less than 18.5, you are underweight'
            break;
        
        case ans.value>=18.5 && ans.value<25:
            resp.innerText = 'Your BMI is between 18.5 and 25, you are in the healthy range'
            break;
        
        case ans.value>=25 && ans.value<30:
            resp.innerText = 'Your BMI is between 25 and 30, you are overweight'
            break;
        case ans.value>=30:
            resp.innerText = 'Your BMI is above 30, you obese'
            break;
        default:
            break;
    }
})
