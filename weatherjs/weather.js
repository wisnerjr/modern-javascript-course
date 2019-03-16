class Weather {
    constructor(city, country) {
        this.apiKey = 'daa79a540f1a16ff349cd0ce5c1b2e6e';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}