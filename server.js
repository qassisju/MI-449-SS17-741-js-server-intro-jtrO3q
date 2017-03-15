
var http = require('http')

var server = http.createServer(function (request, response) {
  var jokeOne = 'Knock, knock! Who’s there? Opportunity! That is impossible. Opportunity doesn’t come knocking twice!'
  var jokeTwo = 'Knock knock. Whos there? Beats. Beats who? Beats me.'
  var jokeThree = 'Knock knock. Who’s there?The door.'
  var randNum = Math.random()
  if (request.url === '/') {
    response.end(
      '<h1>Welcome to my server</h1>'
    )
  } else if (request.url === '/random-joke') {
    if (randNum > 0.0 && randNum < 0.4) {
      response.end(
      '<h1>Hello, welcome to my server</h1>' + '<a href="/">Homepage</a>' + jokeOne
    )
    }
    if (randNum > 0.4 && randNum < 0.7) {
      response.end(
        '<h1>Hello, welcome to my server</h1>' + '<a href="/">Homepage</a>' + jokeTwo
      )
    }
    if (randNum > 0.7 && randNum < 1) {
      response.end(
        '<h1>Hello, welcome to my server</h1>' + '<a href="/">Homepage</a>' + jokeThree
      )
    }
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute animal</h1>' +
      '<a href="/">Homepage</a>' + '<img src="http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals-2/cute-baby-animals-2-2.jpg">'
        )
  } else {
    response.end(
      '<a href = "/">Homepage</a>' + '404 Error, Page not found at URL: ' + request.url
    )
  }
})
var port = process.env.PORT || 8080
server.listen(port)
console.log('Server running at http://localhost:' + port + '/')
