// const dias = document.querySelector('#dias')
// pegar o valor do input de dias 

const salario_hora = document.querySelector('#salario_hora')
// pegar o valor do input salario hora



// function multiplicaSalario () {
   
//         const dias = document.getElementById('dias').value;
//         const salario_hora = document.getElementById('salario_hora').value;
//         const totalSalario = dias*salario_hora
//         console.log(totalSalario)
    
// }
// document.querySelector('#totalSalario').innerHTML = multiplicaSalario ();

function multiSalario(){
    const dias = document.getElementById('dias').value
    const salario = document.getElementById('salario_hora').value
    const total = dias * salario
    const salarioFinal = document.querySelector('#total').innerHTML += total
    return salarioFinal
}

