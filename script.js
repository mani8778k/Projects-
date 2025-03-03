

const apikey = "796e91ea51ca298e688bafa651190991"

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="


const city = document.querySelector(".input")

const button = document.querySelector(".button")

async function checkweather (city) {

    const response = await fetch(apiurl + city + `&appid=${apikey}`)

    if(response.status == 404) {
        
        document.querySelector(".weather").style.display = "none" ;
        document.querySelector(".error").style.display = "block" ;

    }

    var data = await response.json()

    console.log(data)

    document.querySelector(".weather-city").innerHTML = data.name

    document.querySelector(".weather-deg").innerHTML = Math.round(data.main.temp)+ "°C"

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"

    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"



    if(data.weather[0].main == "Clouds") {
        document.querySelector(".weather-report").src = "image/cloudy.png"
    }

    else if(data.weather[0].main == "Rain") {
        document.querySelector(".weather-report").src = "image/rain.png"
    }

    else if(data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-report").src = "image/drizzle.png"
    }

    else if(data.weather[0].main == "Haze") {
        document.querySelector(".weather-report").src = "image/haze.png"
    }

    else if(data.weather[0].main == "Clear") {
        document.querySelector(".weather-report").src = "image/clear-sky.png"
    }

    else if(data.weather[0].main == "Mist") {
        document.querySelector(".weather-report").src = "image/clodyicon.png" 
    }

    document.querySelector(".weather").style.display = "block" ;
    document.querySelector(".weather").style.transition =  "50s ease" ;
    document.querySelector(".error").style.display = "none" ;
    
}

button.addEventListener("click" , () => {

    checkweather(city.value)
})



