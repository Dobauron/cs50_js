document.addEventListener('DOMContentLoaded', function() {

    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        const currency = data;
        document.querySelector('body').innerHTML = currency;
    });

});