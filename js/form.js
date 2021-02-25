var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    //console.log("deu certo");

    var form = document.querySelector("#form-adiciona");

    const paciente = ObtemPacienteDoForm(form);

    const errorMessage = ValidaPaciente(paciente);

    let errorList = document.querySelector(".error-list");
    errorList.innerHTML = "";

    if (errorMessage.length == 0) {

        adicionaPaciente(paciente);

        form.reset();

    } else {

        ApontaErrosDoFormulario(errorMessage, errorList);

    }
})


function ApontaErrosDoFormulario(errorMessage, errorList) {
    errorMessage.forEach(erro => {
        const li = document.createElement("li");
        li.textContent = erro;
        li.style.color = "red";

        errorList.appendChild(li);
    });
}

function AdicionaPaciente(paciente) {

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(MontaTr(paciente));
}

//Coleta os dados do formulário
function ObtemPacienteDoForm(form) {

    const paciente = {

        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: CalculaIMC(form.peso.value, form.altura.value)

    };

    return paciente;

}

//Monta a nossa tr recebendo como parâmetro o paciente
function MontaTr(paciente) {
    const pacienteTr = document.createElement("tr");
    //const botaoEditar = document.createElement("button")

    const nometd = MontaTd(paciente.nome, "info-nome");
    const pesotd = MontaTd(paciente.peso, "info-peso");
    const alturatd = MontaTd(paciente.altura, "info-altura")
    const gorduratd = MontaTd(paciente.gordura, "info-gordura");
    const imctd = MontaTd(paciente.imc, "info-imc");
    nometd.textContent = paciente.nome;
    pesotd.textContent = paciente.peso;
    alturatd.textContent = paciente.altura;
    gorduratd.textContent = paciente.gordura;
    imctd.textContent = paciente.imc;
    console.log(`Olha o imc: ${paciente.imc}`)


    pacienteTr.appendChild(nometd);
    pacienteTr.appendChild(pesotd);
    pacienteTr.appendChild(alturatd);
    pacienteTr.appendChild(gorduratd);
    pacienteTr.appendChild(imctd);
    pacienteTr.classList.add("paciente");


    
    //paciente.appendChild(botaoEditar);


    return pacienteTr;
}

//monta a td, atribuindo a classe que ela representa 
function MontaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}


function ValidaPaciente(paciente) {

    let errorMessage = [];

    if (paciente.nome.length == 0) errorMessage.push("O campo nome não foi preenchido");

    if (paciente.peso <= 0 || paciente.peso >= 1000) errorMessage.push("Peso Inválido");

    if (paciente.altura <= 0 || paciente.altura >= 4) errorMessage.push("Altura Inválida");

    return errorMessage;

}