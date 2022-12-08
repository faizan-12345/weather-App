const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2c0c1140b8msh1313fb468b7c8dcp148ddajsncf1173bf115a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
cityname.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		
		cloud_pct.innerHTML=response.cloud_pct
		temp.innerHTML=response.temp
		feels_like.innerHTML=response.feels_like
		humidity.innerHTML=response.humidity
		min_temp.innerHTML=response.min_temp
		max_temp.innerHTML=response.max_temp
		wind_speed.innerHTML=response.wind_speed
		wind_degrees.innerHTML=response.wind_degrees
		sunrise.innerHTML=response.sunrise
		sunset.innerHTML=response.sunset
		  
	}
		)
	.catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);
})
getWeather("Delhi");



{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shanghai', options)
	.then(response => response.json())
	.then(response => {
		console.log(response,"for shanghai");
		
		temp1.innerHTML=response.temp
		feels_like1.innerHTML=response.feels_like
		humidity1.innerHTML=response.humidity  
	}
		)
	.catch(err => console.error(err));




	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=boston', options)
	.then(response => response.json())
	.then(response => {
		console.log(response,"for boston");
		
		temp2.innerHTML=response.temp
		feels_like2.innerHTML=response.feels_like
		humidity2.innerHTML=response.humidity  
	}
		)
	.catch(err => console.error(err));



	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow', options)
	.then(response => response.json())
	.then(response => {
		console.log(response,"for lucknow");
		
		temp3.innerHTML=response.temp
		feels_like3.innerHTML=response.feels_like
		humidity3.innerHTML=response.humidity  
	}
		)
	.catch(err => console.error(err));
}



function theme(choose){
	let body = document.getElementById("body");
	let table = document.getElementById("table");
	let nav = document.getElementById("navbar");
	let card = document.querySelectorAll(".col");
	let navbarText = document.querySelectorAll(".navbar-text");
	let down = document.querySelectorAll(".navbar-text1")
  if(choose === "day"){
body.style.backgroundColor = "white";
body.style.color = "black"
nav.style.backgroundColor = "white"
table.style.color = "black"
logo.style.color = "black"
navbarText.forEach(text =>{
	text.style.color = "black";
})
  } else if(choose === "night"){
	nav.style.backgroundColor = "#334d4d"
	logo.style.color = "aliceblue"
body.style.backgroundColor = "#334d4d";
body.style.color = "aliceblue"
table.style.color = "aliceblue"
navbarText.forEach(text =>{
	text.style.color = "aliceblue";
})
down.forEach(text1 =>{
	text1.style.color = "black";
})
card.forEach(cards =>{
	cards.style.color = "black";
})
  }
}