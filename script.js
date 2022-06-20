const dateOfBirth = document.getElementById("date-of-birth");
const luckyNumber = document.getElementById("lucky-number");
const checkBtn = document.getElementById("check-btn");
const outputBox = document.getElementById("output-box");

checkBtn.addEventListener('click', checkBirthdateIsLucky);

function checkBirthdateIsLucky () {
    const dob = dateOfBirth.value;
    const checkNumber = luckyNumber.value;
    if(dob && checkNumber) {
        const sum = calculateSum(dob);
        numberIsLucky(sum, checkNumber);
    } else {
        alert('Please enter both the fields 🤦‍♂️');
    }
}

function numberIsLucky(sum, checkNumber) {
    if(sum % checkNumber === 0) {
        outputBox.textContent = "Your birthday is lucky! 🎉";
    } else {
        outputBox.textContent = `Your birthday is not lucky! 🤷‍♂️`;
    }
}

function calculateSum (dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for(let i=0; i<dob.length; i++) {
        sum += Number(dob.charAt(i));
    }
    return sum;
}