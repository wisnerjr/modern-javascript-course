class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.minTemp = document.getElementById('w-min-temp');
        this.maxTemp = document.getElementById('w-max-temp');
        this.wind = document.getElementById('w-wind');
    }
    
    paint(weather) {
        this.location.textContent = `${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent =`${weather.main.temp}ºC`;
        this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
        this.minTemp.textContent = `Min Temp: ${weather.main.temp_min}ºC`;
        this.maxTemp.textContent = `Max Temp: ${weather.main.temp_max}ºC`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}m/s`;

    }
}