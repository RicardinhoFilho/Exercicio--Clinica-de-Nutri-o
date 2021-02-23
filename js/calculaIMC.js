
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes.length)

console.log(peso);
console.log(altura);

for (var i = 0; i < pacientes.length; i++) {

    var pacienteAtual = pacientes[i];

    var peso = Number(pacienteAtual.querySelector(".info-peso").textContent);
    var altura = Number(pacienteAtual.querySelector(".info-altura").textContent);



    var validaAltura = true;
    var validaPeso = true;

    var imc;

   
    if (validaAltura && validaPeso) {
        imc = CalculaIMC(peso,altura);
        pacienteAtual.querySelector(".info-imc").textContent = imc;
    }

    




}

function CalculaIMC(peso,altura){
    
    var imc = peso/(altura * altura);
    
    return imc.toFixed(2);
}


