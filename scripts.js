console.log('Hello, world.');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const value = document.querySelector('input');

console.log(h1)

console.log({ 
    h1,
    p,
    parrafito,
    pid,
    value    
});


//agregamos algo desde 0
// const img = document.createElement('img');
// img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20OMLXMVFhnI8NwsVlDJYZ7_wZzP67oHajWXCEV6TSK5y_eX0CklMkL069SFEy2eyto8&usqp=CAU');

// console.log(img)
// pid.innerHTML = '';
// pid.append(img);



const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn_calcular = document.querySelector('button');
const pResult = document.getElementById('result');
const form = document.getElementById('formulario');


console.log({
    input1,
    input2,
    btn_calcular
});

// let v1 = input1.value;
// let v2 = input2.value;
// btn_calcular.addEventListener('click', btnOnClick);   


// function btnOnClick(){
//     const sumaInputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = 'Resultado: '+sumaInputs;
// }

form.addEventListener('submit',sumarInputsValues);

function sumarInputsValues(event){
    console.log(event);
    event.preventDefault();
    const sumaInput= Number(input1.value)+Number(input2.value);
    pResult.innerText = 'Resultado:' +sumaInput;
}









