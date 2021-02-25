var botaoBuscarPacientes = document.querySelector("#buscar-pacientes");

botaoBuscarPacientes.addEventListener("click", () => {

    console.log("Buscando Pacientes");

    var xrh = new XMLHttpRequest();//criando um uma variavel do tipo XMLHttpRequest(vamos utilizar os métodos desta classe para consumir uma api)

    xrh.open("Get", "https://api-pacientes.herokuapp.com/pacientes");//Neste método passamos o ot ipo da requisição que vamos fazer que neste caso é do tipo Get e seu endereço
    //xrh.open("Get", "https://api-pacientes.herokuapp.com/pacientestestandoerro");//testando quando ocorrer um erro durante a requisição
   
    xrh.addEventListener("load", function () {//Adicionamos este evento que ocorre quando tivermos carregado todos os dados desta requisição
        //console.log(xrh.responseText);//Para testar estamos utilizando a função "responseText" para exibir os dados em nosso console do navegador

        if (xrh.status == 200) {//checando status de nossa requisição, 200 representa que deu certo

            var resposta = xrh.responseText;
            console.log(typeof (resposta));
            var pacientes = JSON.parse(resposta);
            console.log(typeof (pacientes));

            pacientes.forEach(paciente => {
                AdicionaPaciente(paciente)//Utilizando nossa função criada no arquivo form.js para adicionar nossos novos elementos à nossa tabela
            });
        } else {//se der erro na requisição iremos alertar o erro e o status
            //alert(`Ocorreu um erro:\n Status da Requisição:${xhr.status};\n ${xrh.responseText}`);
            alert(`Ocorreu um erro:\n Status da Requisição:${xrh.status};\n ${xrh.responseText}`)
        }



    });

    xrh.send();//enviando requisição
})