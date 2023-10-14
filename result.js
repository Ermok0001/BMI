const urlParams = new URLSearchParams(window.location.search)

const resultText = urlParams.get('resultText');
const bmi = urlParams.get('bmi')
const intText = urlParams.get('intText');
const color = urlParams.get('abc')

document.getElementById('resultText1').innerHTML = resultText;
document.getElementById('bmi').innerHTML = bmi;
document.getElementById('interpText').innerHTML = intText;

const resultText1 = document.getElementById('resultText1')
resultText1.style.color = color
// if(resultText1.innerHTML == 'Худей'){
//     resultText1.style.color = 'blue'
// }else if(resultText1.innerHTML == 'Молодец не жирный'){
//     resultText1.style.color = 'red'
// }else if(resultText1.innerHTML == 'Дрыщь'){
//     resultText1.style.color = ' orange'
// }