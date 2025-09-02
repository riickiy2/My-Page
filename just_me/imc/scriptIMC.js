function OlaFulano(){
	let nome = document.getElementById("nome").value;
	alert("Olá, " + nome + " Seja bem vindo!");
}


function calculaIMC(){
	let nome = document.getElementById("nome").value;
	let peso = parseFloat(document.getElementById("peso").value);
	let altura = parseFloat(document.getElementById("altura").value);
	let imc = peso /(altura * altura);
	let resumo = document.getElementById("resumo");
	resumo.innerText = `${nome}, seu IMC é ${imc.toFixed(2)}`;
}
