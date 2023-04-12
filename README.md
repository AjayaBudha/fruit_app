# Fruit Salad App

## Installation and Usage

- cd into folder
- npm install
- npm run dev will run on [8080](http://localhost:8080/)

## AP

Application Programming INterface
-> set of rules and protocal taht enables different softawre applicatoin to communicate with each other

pending -> the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made.

fulfilled -> the asynchronous function has succeeded. When a promise is fulfilled, the .then() handler is called.

rejected -> the asynchronous function has failed. When a promise is re

## JAVASCRIPT syntax for API

'''js
fetch(url)
.then(resp => resp.json())
.then(data =>){
console.log(data)
}
.catch(err => { // extra part
console.log(err)
})
'''
