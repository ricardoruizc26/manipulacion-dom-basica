const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     console.log({event});
//     event.preventDefault();
//     pResult.innerText = "Resultado: " + (input1.value + input2.value);
//     //pResult.innerText = "Resultado: " + (parseFloat(input1.value) + parseFloat(input2.value));
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    //console.log({event});
    //event.preventDefault();
    //pResult.innerText = "Resultado: " + (input1.value + input2.value);
    pResult.innerText = "Resultado: " + (parseFloat(input1.value) + parseFloat(input2.value));
}

// form.addEventListener("mouseover", enviarFormulario)

// function enviarFormulario(e){
//     e.preventDefault();

//     alert("virus")
// }