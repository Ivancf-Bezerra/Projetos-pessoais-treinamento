function updateLimit() {
    const limite = 60;
    let totalSelected = 0;
    const atributos = document.getElementsByClassName('atributo');
    for (let i = 0; i < atributos.length; i++) {
      totalSelected += parseInt(atributos[i].value);
    }
    const remaining = limite - totalSelected;
    document.getElementById('limiterestante').textContent = remaining;

    if (remaining < 0) {
        alert('Você não pode distribuir mais pontos do que o total disponível!');
        const lastInput = document.activeElement;
        lastInput.value = parseInt(lastInput.value) + remaining;
        updateLimit();
      } else {
        document.getElementById('limiterestante').textContent = remaining;
      }
  }