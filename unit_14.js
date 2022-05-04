const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "8f39ef8f17f5b2f5b96c8d9af93272ff"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => { return weather.json() })
        .then(showWeather)
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.city-weather').innerHTML = Math.round(data.main.temp) + '&deg';
    document.querySelector('.city-description').textContent = data.weather[0]['description'];
    document.querySelector('.city-wind').textContent = 'wind is: ' + data.wind.speed + ' km/h';
    document.querySelector('.city-img').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;

}

getWeather()
document.querySelector('#city').onchange = getWeather;