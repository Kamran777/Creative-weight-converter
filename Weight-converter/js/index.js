const poundsInput = document.getElementById('poundsInput');

const kgResult = document.getElementById('kilograms-result');
const grResult = document.getElementById('grams-result');
const ocResult = document.getElementById('ounces-result');

poundsInput.addEventListener('input', e => {
    let pounds = e.target.value;
    console.log(pounds);

    kgResult.innerHTML = pounds/0.0022046;
    grResult.innerHTML = pounds/2.2046;
    ocResult.innerHTML = pounds*16;

})