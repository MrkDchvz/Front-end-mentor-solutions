const number = document.getElementsByName('rate');
const button = document.querySelector('.btn')
const alerts = document.querySelector('.alert');
const front = document.querySelector('.rating-state');
const back = document.querySelector('.thank-you-state');
const userRate = document.querySelector('.rating-value');
console.log(number)
console.log(alerts)



let rateSelect = false;
let rateValue; 
number.forEach((element, index) => {
    element.addEventListener('click', () => {
        rateSelect = true;
        if (element.checked === true) {
            rateValue = index + 1;
        }
    })
});

button.addEventListener('click', () => {
    back.classList.remove('.hide');
    back.classList.add('.show');
    if (rateSelect === false) {
        alerts.classList.remove('hide') ;

    }
    else {
        alerts.style.display = 'block';
        back.classList.remove('hide');
        back.classList.add('show');
        front.classList.add('hide');
        userRate.innerHTML = rateValue;
        
    }
})





