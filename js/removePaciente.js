
const tpacientes = document.querySelector("table");

tpacientes.addEventListener("dblclick", (event) => {
      // const alvoEvento = event.target;
    // const tr = alvoEvento.parentNode;
    // tr.remove();

    event.target.parentNode.classList.add("fadeOut");//Adicionamos está classe que em uma transição de 1 seg fica invisível
    setTimeout(function(){event.target.parentNode.remove()}, 1000);//para dar tempo de nossa animação acima ocorrer utilizamos a função "setTimeout", passando por parâmetro a operação e o tempo, nesse caso 1000ms para que a nossa enimação dê tempo de terminar 
});


