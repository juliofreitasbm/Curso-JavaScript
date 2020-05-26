var primeira_adicao = false
var vet = []

function adicionar() {
	let num = document.getElementById('txtn')
	let tab = document.getElementById('seltab')

	if(num.value.length == 0){
		window.alert('Nenhum número para ser adicionado!')
	} else if(num.value < 1 || num.value > 100) {
		window.alert('[ERRO] Número inserido inválido! Digite um número entre 1 e 100')
	} else if(vet.indexOf(Number(num.value)) != -1) {
		window.alert('[ERRO] Número já existe na Lista')
	} else {	
		if(primeira_adicao == false){
			tab.innerHTML = ''
			primeira_adicao = true
		}
		let n = Number(num.value)
		vet.push(n)
		let item = document.createElement('option')
		item.text = `Valor ${n} adicionado.`
		tab.appendChild(item)
	}

}

function finalizar() {
	let dres = document.getElementById('res')
	let item2 = document.createElement('p')
	dres.appendChild(item2)		
	//console.log(vet)
	//console.log(typeof vet[0])
	vet.sort((a,b)=> a-b)

	//console.log(vet)
	item2.innerHTML = `Ao todo, temos ${vet.length} números cadastrados<br>
				O maior valor informado foi ${vet[vet.length - 1]}<br>
				O menor valor informado foi ${vet[0]}<br>
				Somando todos os valores, temos ${somar(vet)}<br>
				A média dos valores digitados é ${Math.round(somar(vet)/vet.length)}`

}

function somar(vet) {
	let soma=0
	for(let c=0; c<vet.length; c++){
		soma += vet[c]
	}
	return soma
}