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
}
    
