const storage = new Storage;
const weatherLocation = storage.getLocationData();
const ui = new UI;
const weather = new Weather(weatherLocation.city, weatherLocation.country);


document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-changeBtn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    storage.setLocationData(city, country);
    
    getWeather();

    $('#locModal').modal('hide');
});

function getWeather() {
    weather.getWeather()
        .then(data => {
            ui.paint(data);
        })
        .catch(err => console.log(err));
}

