function calcularMedia(){
	let n1 = parseFloat((document.getElementById('n1')).value);
	let n2 = parseFloat((document.getElementById('n2')).value);
	let n3 = parseFloat((document.getElementById('n3')).value);
	let n4 = parseFloat((document.getElementById('n4')).value);
	let aluno = document.getElementById("aluno").value;
	let resultado = document.getElementById("resultado");

	let media = (n1+n2+n3+n4)/4
	let situacao = media > 6 ? 'Aprovado' : 'Reprovado';

	resultado.innerHTML = `<p> Aluno: ${aluno}:</p> <p>Média: ${media.toFixed(1)}</p><p>${situacao}</p>`;
};



