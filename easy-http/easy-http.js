function easyHTTP() {
    this.http = new XMLHttpRequest();
}

easyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    this.http.send();

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }
}

easyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.send(JSON.stringify(data));

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText)
    }
}

easyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    this.http.send(JSON.stringify(data));

    let self = this;
    this.http.onload = function () {
        callback(null, self.http.responseText)
    }
}

easyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);

    this.http.send();

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, 'Post deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    }
}