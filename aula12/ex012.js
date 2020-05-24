var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)

if (hora <= 5) {
	console.log ('Eita Carai, ta de Madrugada!')
} else if (hora <= 11) {
	console.log ('Bom Dia!')
} else if (hora <= 18) {
	console.log ('Boa Tarde!')
} else {
	console.log('Boa Noite')
} 