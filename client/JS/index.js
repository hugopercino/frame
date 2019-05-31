var campos = [
    document.querySelector("#data"),
    document.querySelector("#quantidade"),
    document.querySelector("#valor")

];

document.querySelector(".form").addEventListener("submit", function(event){
    event.preventDefault()

    var tr = document.createElement("tr");
    var tbody = document.querySelector("table tbody");

    campos.forEach(function(campo){ // Esse campo está relacionado com cada campo lá da variaveis campos, por isso logo ali embaixo, o valor da td vai ser igual ao valor do campo.value
        
        var td = document.createElement("td");
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement("td");
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);

    campos[0].value = "";
    campos[1].value = "1";
    campos[2].value = "0";

    campos[0].focus();

});

