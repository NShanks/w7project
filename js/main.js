// weather api key
// 60e1cc5775e21fd5d753397fb5504c37

// zip code api call
// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// city id api call
// https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

// creating the variables for the numbers we want from the api call
let button = document.querySelector('.submitBtn')
let inputValue = document.querySelector('.inputValue')
let city = document.querySelector('.city')
let temperature = document.querySelector('.temperature')
let high = document.querySelector('.high')
let low = document.querySelector('.low')
let forecast = document.querySelector('.forecast')
let humidity = document.querySelector('.humidity')


function toF(x){
    return (((x-273.15)*1.8)+32).toFixed(0)
}

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=60e1cc5775e21fd5d753397fb5504c37`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let nameValue = data['name'];
        let tempValue = toF(data['main']['temp'])
        let highValue = toF(data['main']['temp_max'])
        let lowValue = toF(data['main']['temp_min'])
        // let forecastValue
        let humidityValue = data['main']['humidity']

        city.innerHTML = "Welcome to " + nameValue;
        temperature.innerHTML = "The temperature is " + tempValue;
        high.innerHTML = "The high is " + highValue;
        low.innerHTML = "The low is " + lowValue;
        // forecast.innerHTML = "The forecast? rn is " + forecastValue;
        humidity.innerHTML = "The humidity is " + humidityValue + '%';
    })
})
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=60e1cc5775e21fd5d753397fb5504c37`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let nameValue = data['name'];
        let tempValue = toF(data['main']['temp'])
        let highValue = toF(data['main']['temp_max'])
        let lowValue = toF(data['main']['temp_min'])
        // let forecastValue
        let humidityValue = data['main']['humidity']

        city.innerHTML = "Welcome to " + nameValue;
        temperature.innerHTML = "The temperature is " + tempValue;
        high.innerHTML = "The high is " + highValue;
        low.innerHTML = "The low is " + lowValue;
        // forecast.innerHTML = "The forecast? rn is " + forecastValue;
        humidity.innerHTML = "The humidity is " + humidityValue + '%';
    })
