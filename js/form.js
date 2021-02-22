var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    //console.log("deu certo");

    var form = document.querySelector("#form-adiciona");

    const paciente = ObtemPacienteDoForm(form);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(MontaTr(paciente));

    form.reset();


})

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

    const nometd = MontaTd(paciente.nome, "info-nome");
    const pesotd = MontaTd(paciente.peso, "info-peso");
    const alturatd =MontaTd(paciente.altura,"info-altura")
    const gorduratd =MontaTd(paciente.gordura,"info-gordura");
    const imctd =MontaTd(paciente.imc,"info-imc");

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




    return pacienteTr;
}

//monta a td, atribuindo a classe que ela representa 
function MontaTd(dado, classe){

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

