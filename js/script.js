function clock()
{
	let date = new Date()

	let day = new Array('lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'diamnche')[date.getDay()]
	let month = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'decembre')[date.getMonth()]
	   
	document.getElementsByClassName('hour')[0].innerHTML = date.getHours() + ':' + date.getMinutes()
	document.getElementsByClassName('date')[0].innerHTML = day + ' ' + date.getDate() + ' ' + month
}

function getMeteo()
{

	$.get('https://api.openweathermap.org/data/2.5/weather?q=Aubi%C3%A8re,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric', (data) => 
	{
		document.getElementsByClassName('temp')[0].innerHTML = Math.round(data.main.temp) + '°'
		   
		document.getElementsByClassName('icon')[0].src = 'images/svg/' + data.weather[0].icon + '.svg'

		let description

		switch(data.weather[0].icon)
		{
			case '01d':
			case '01n':
				description = "Beau temps"
				break
			case '02d':
			case '02n':
				description = "Partiellement nuageux"
				break
			case '03d':
			case '03n':
				description = "Nuageux"
				break
			case '04d':
			case '04n':
				description = "Très nuageux"
				break
			case '09d':
			case '09n':
				description = "Forte pluie"
				break
			case '10d':
			case '10n':
				description = "Pluie"
				break
			case '11d':
			case '11n':
				description = "Tonnerre"
			case '13d':
			case '13n':
				description = "Neige"
				break
			case '50d':
			case '50n':
				description = "Brouillard"
				break
		}

		/*switch(data.weather[0].icon)
		{
			case '01d':
			case '01n':
				description = "I fé bo"
				break
			case '02d':
			case '02n':
				description = "Gri"
				break
			case '03d':
			case '03n':
				description = "Gri gri"
				break
			case '04d':
			case '04n':
				description = "Gri gri gri"
				break
			case '09d':
			case '09n':
				description = "Sa piss"
				break
			case '10d':
			case '10n':
				description = "I pleu"
				break
			case '11d':
			case '11n':
				description = "Sa tone"
			case '13d':
			case '13n':
				description = "C l iver ou bin"
				break
			case '50d':
			case '50n':
				description = "O la vapeur"
				break
		}*/

		document.getElementsByClassName('weather')[0].innerHTML = description
		
	})
}

setInterval(getMeteo, 5 * 60 * 1000)
setInterval(clock, 1000)

let menu = document.getElementsByClassName('menu');
let index = 0

setTimeout( function()
{
	menu[0].classList.add('selected')
	menu[0].style.margin = '0 .5rem 0 .5rem'
}, 200)

$(window).keydown( (key) => 
{
	menu[index].classList.remove('selected')
	menu[index].style.margin = '0 .5rem 0 .5rem'

	if(key.which === 39) // RIGHT
	{
		index++
		
		if(index > 4) index = 0
	}
	else if(key.which === 37) // LEFT
	{
		index--

		if(index < 0) index = 4
	}

	menu[index].classList.add('selected')
	menu[index].style.margin = '0 3rem 0 3rem'
});
