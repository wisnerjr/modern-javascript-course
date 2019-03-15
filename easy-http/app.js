const http = new easyHTTP;

// const posts = http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

const posts = http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});