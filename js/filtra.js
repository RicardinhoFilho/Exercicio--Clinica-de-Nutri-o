var campoFiltro = document.querySelector("#buscar");

campoFiltro.addEventListener("input", () => {
    console.log(campoFiltro.value);

    var pacientes = document.querySelectorAll(".paciente");//Selecionando toda a tabela de pacientes
    if (campoFiltro.value.length > 0) {//Verifica se algo foi digitado no campo de busca
        pacientes.forEach(paciente => {//Varrendo o vetor pacientes

            var tdNome = paciente.querySelector(".info-nome");//selecionando a td que possui o campo nome 
            var nome = tdNome.textContent;//pegando o valor deste campo

            //console.log(nome)

            var expressao = new RegExp(campoFiltro.value,"i")//criando expressão regular case insensitive, ignoramso se etá maiúsculo ou minúsculo

            if (!expressao.test(nome)) {//testando se a expressão(busca digitada) é diferente de nome
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel")
            }



        });
    } else {//caso o campod e nome esteja vazio, mostramos todos os pacientes
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel")
        });

    }
})