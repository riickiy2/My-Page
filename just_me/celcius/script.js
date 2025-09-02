function converterTemperatura(){
	let temp = parseFloat(document.getElementById('temperatura').value);
	let tipo = document.getElementById('tipo').value;
	let resultado = ' ';
	if (tipo === 'c2f') {
        resultado = `${temp}ºC = ${(temp * 9 / 5 + 32).toFixed(1)}ºF`;
    } else if (tipo === 'f2c') {
        resultado = `${temp}ºF = ${((temp - 32) * 5 / 9).toFixed(1)}ºC`;
    } else {
        resultado = 'Escolha uma conversão válida.';
    }
	
	document.getElementById('resultado').textContent = resultado;
};



