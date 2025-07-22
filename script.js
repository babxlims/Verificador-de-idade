function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var img = document.getElementById('imagem');

    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
        return; // Para a execução da função aqui
    }

    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';

    if (fsex[0].checked) {
        genero = 'Homem';

        if (idade >= 0 && idade < 10) {
            img.src = 'bebemenino.PNG';
        } else if (idade < 21) {
            img.src = 'jovemhomem.PNG';
        } else if (idade < 50) {
            img.src = 'adultoO.PNG';
        } else {
            img.src = 'velhohomem.PNG';
        }

    } else if (fsex[1].checked) {
        genero = 'Mulher';

        if (idade >= 0 && idade < 10) {
            img.src = 'bebemenina.PNG'
        } else if (idade < 21) {
            img.src = 'jovemmenina.PNG'
        } else if (idade < 50) {
            img.src = 'adulta.PNG'  
        } else {
            img.src = 'velha.PNG'
            '#997d8d'
        }
    }

    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
   
}
