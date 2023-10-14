let heightInput = Number(document.getElementById('height').innerHTML);
let weightInput = Number(document.getElementById('weight').innerHTML);
let ageInput = Number(document.getElementById('ageInput').innerHTML);
const calculateButton = document.getElementById('calculateButton');

const addWeightButton = document.getElementById('addWeightButton');
const subWeightButton = document.getElementById('subWeightButton');
const addAgeButton = document.getElementById('addAgeButton');
const subAgeButton = document.getElementById('subAgeButton');


// const resultText = document.getElementById('resultText')
// 
function getResult(bmi) {
    if (bmi > 25) {
        
        return 'Худей';
    } else if (bmi > 18) {
    
        return 'Молодец не жирный';
    } else {
        
        return 'Дрыщь';
    }
}


function getcolor(bmi) {
    if (bmi > 25) {
        
        return 'red';
    } else if (bmi > 18) {
    
        return 'blue';
    } else {
        
        return 'green';
    }
}


function getInterpretation(bmi) {
    if (bmi > 25) {
        return 'Меньше кушай больше занимайся спортом а то жирный';
    } else if (bmi > 18) {
        return 'Молодей в норм фроме, но кто лениться тот жирнеет Ауф';
    } else {
        return 'Че такой худой, тебя может слабый ветерок унести';
    }
}

function calculateBmi(weight, height) {
    let heightInm = height / 100;
    let bmi = Math.floor(weight / Math.pow(heightInm, 2));
    return bmi;
}

calculateButton.addEventListener('click', function () {
    let heightInput = Number(document.getElementById('height').innerHTML);

    let bmi = calculateBmi(weightInput, heightInput);
    let resultText = getResult(bmi);
    let intText = getInterpretation(bmi);
    let color = getcolor(bmi)


    let url = `result.html?bmi=${bmi}&resultText=${resultText}&intText=${intText}&abc=${color}`;
    window.location.href = url;
});




addWeightButton.addEventListener('click', function () {
    weightInput = addWeight(weightInput);
    document.getElementById('weight').innerHTML = weightInput;
});

subWeightButton.addEventListener('click', function () {
    weightInput = subWeight(weightInput);
    document.getElementById('weight').innerHTML = weightInput;
});

addAgeButton.addEventListener('click', function () {
    ageInput = addAge(ageInput);
    document.getElementById('ageInput').innerHTML = ageInput;
});

subAgeButton.addEventListener('click', function () {
    ageInput = subAge(ageInput);
    document.getElementById('ageInput').innerHTML = ageInput;
});

function addWeight(weight) {
    return (weight +=1);
}

function subWeight(weight) {
    return (weight -=1);
}

function addAge(age) {
    return (age += 1);
}

function subAge(age) {
    return (age -= 1);
}

const line = document.getElementById('line')
const height = document.getElementById('height')
const circle = document.getElementById('circle')
let circleIsDragging = false;

circle.addEventListener('mousedown', ()=>{
    circleIsDragging=true
})

document.addEventListener('mousemove',(event)=>{
    if(circleIsDragging){
        const lineRect = line.getBoundingClientRect()
        const circleRect = circle.getBoundingClientRect()

        const circlex = event.clientX - lineRect.left 
        circleWidth = circleRect.width
        lineWidth = lineRect.width
        const newcirclex = Math.min(Math.max(circlex,0), lineWidth - circleWidth)
        const newHeight = Math.round(newcirclex/(lineWidth-circleWidth)*250)
        height.textContent = newHeight

        circle.style.left = newcirclex + 'px';
    }
})

document.addEventListener('mouseup',()=>{
    circleIsDragging = false
})