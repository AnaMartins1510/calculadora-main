const calcularSalario = () => {
    const diasTrabalhados = document.querySelector('#dias').value
    const valorHora = documente.querySelector ('#salario_hora').value
    const valorDia = valorHora * 8 
    const salarioMes = valorDia * diasTrabalhados
    const salarioTotal = document.querySelector('#salarioBruto')
    salarioTotal.innerHTML = 'R$' + salarioMes.toFixed(2)
}

function calcularValorHora () {
    const diasTrabalhados = document.querySelector('#dias').value
    const salarioTotal = document.querySelector('#salario_total').value
    const valorHora = (salarioTotal / diasTrabalhados) / horasDiarias
    const salarioHora = document.querySelector('#valor_hora')
    salarioHora.innerHTML = 'R$ ' + valorHora.toFixed(2)
}