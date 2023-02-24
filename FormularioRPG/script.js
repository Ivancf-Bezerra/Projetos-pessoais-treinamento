function finiciar(){
    let ficha = document.getElementById('ficha');
    if(ficha.style.display = 'none'){
        ficha.style.display = 'block';
    }
}

function fclasse(){

    if(document.getElementById('guerreiro').checked) {
        document.getElementById('armas-guerreiro').style.display = 'block';
    }else {
        document.getElementById('armas-guerreiro').style.display = 'none';   
    }
    if(document.getElementById('ladrao').checked) {
        document.getElementById('armas-ladrao').style.display = 'block';
    }else {
        document.getElementById('armas-ladrao').style.display = 'none';   
    }

    if (!document.getElementById('guerreiro').checked) {
        document.querySelectorAll('#armas-guerreiro input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
    }
    if (!document.getElementById('ladrao').checked) {
        document.querySelectorAll('#armas-ladrao input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
    }
}

function verificarQuantidadeDeArmas() {
    var armasSelecionadas = 0;
    var checkboxes = document.querySelectorAll(".armas-classes input[type='checkbox']");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            armasSelecionadas++;
        }
    }
    if (armasSelecionadas > 2) {
        // Desmarcar a última checkbox selecionada
        event.target.checked = false;
        // Exibir um alerta informando que o limite de armas foi atingido
        alert("Você só pode selecionar até 2 armas.");
    }
}
    
