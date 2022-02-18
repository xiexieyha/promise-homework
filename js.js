
﻿function getUserList() {
    let userlist = fetch('https://fakerestapi.azurewebsites.net/api/Users').then(function (response) {
        return response.json();
    })

    userlist.then(function (data) {
        let tbody = document.querySelector('tbody')
        tbody.innerHTML = ''
        for (var i = 0; i < data.length; i++) {
            let tr = `<tr><td>${data[i].id}</td><td>${data[i].userName}</td></tr>`
            tbody.innerHTML = tbody.innerHTML + tr;
        }
    })
}

function getBooks() {
    let books = fetch('https://fakerestapi.azurewebsites.net/api/v1/Books').then(function (response) {
        return response.json();
    })
    books.then(function (data) {
        let length = data.length
        let tbody = document.querySelector('tbody')
        tbody.innerHTML = ''
        for (var i = 0; i < length; i++) {
            let tr = `<tr><td>${data[i].id}</td><td>${data[i].bookstitle}</td></tr>`
            tbody.innerHTML = tbody.innerHTML + tr;
        }
    })
}

function getAuthors() {
    let authors = fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors').then(function (response) {
        return response.json();
    })
    authors.then(function (data) {
        let length = data.length
        let tbody = document.querySelector('tbody')
        tbody.innerHTML = ''
        for (var i = 0; i < length; i++) {
            let tr = `<tr><td>${data[i].id}</td><td>${data[i].firstName}</td><td>${data[i].lastName}</td></tr>`
            tbody.innerHTML = tbody.innerHTML + tr;
        }
    })
}