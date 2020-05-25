function contar() {
	let ini = document.getElementById('txti')
	let fim = document.getElementById('txtf')
	let passo = document.getElementById('txtp')
	let res = document.getElementById('res')

	if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
		res.innerHTML = 'Impossível contar!'
	} else {
		res.innerHTML = 'Contando: <br>'
		let i = Number(ini.value)
		let f = Number(fim.value)
		let p = Number(passo.value)
		if(p <= 0) {
			window.alert('[ERRO] Passo Inválido! Considerando PASSO 1')
			p = 1;
		}

		if(i < f) {
			//Contagem crescente
			for(let c = i; c <= f; c += p) {
				res.innerHTML += `${c} \u{1F449}`
			}
		} else {
			//Contagem regressiva
			for(let c = i; c >= f; c -= p) {
				res.innerHTML += `${c} \u{1F449}`
			}
		}
		res.innerHTML += `\u{1F3C1}`	
	}
}




/*
function contar() {
	let inicio = window.document.querySelector('input#id_inicio')
	var final = window.document.getElementById('id_final')
	var passo = window.document.querySelector('input#id_passo')

	var res = document.querySelector('div#id_res')

	for(var cont = inicio.value; cont <= final.value; cont += passo.value){
		res.innerHTML += `${cont}<img src="mao.png" weidth="25" height="25">`
	}

	res.innerHTML += `${cont}<img src="bandeira.png" weidth="25" height="25">`
}

function cria_texto() {
	var res = document.querySelector('div#id_res')
	var txt = document.createElement(cont)

	res.appendChild(txt);
}


function cria_imagem() {

	var res = document.querySelector('div#id_res')
	var img = document.createElement('img')
	img.setAttribute('id', 'mao')
	img.setAttribute('src', 'mao.png')
	img.setAttribute('weidth', '25')
	img.setAttribute('height', '25')

	res.appendChild(img);	
}
*/