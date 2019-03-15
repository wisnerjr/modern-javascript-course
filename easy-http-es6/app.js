const http = new EasyHTTP;

// const users = http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const data = {
    name: 'John Doe',
    email: 'jdoe@gmail.com'
}
// const users = http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// const users = http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

const users = http.delete('https://jsonplaceholder.typicode.com/users/1')
    .then(data => console.log(data))
    .catch(err => console.log(err));