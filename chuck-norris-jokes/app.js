const button = document.querySelector('.get-jokes');
const ul = document.querySelector('.jokes');


loadEventListeners();


function loadEventListeners() {
    button.addEventListener('click', getJokes);
}

function getJokes(e) {
    const xhr = new XMLHttpRequest();
    const number = document.querySelector('input[type="number"]').value;

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.responseText);
            console.log(response);

            let output = '';

            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`;
                });

            } else {
                output += `<li>Something went wrong :(</li>`;
            }

            ul.innerHTML = output;
        }
    }

    xhr.send();
    e.preventDefault();
}