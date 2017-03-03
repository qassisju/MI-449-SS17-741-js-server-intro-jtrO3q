
var http = require('http')

var randomJokeChooser = function () {
  var jokeOne = 'Knock, knock! Who’s there? Opportunity! That is impossible. Opportunity doesn’t come knocking twice!'
  var jokeTwo = 'Knock knock. Whos there? Beats. Beats who? Beats me.'
  var jokeThree = 'Knock knock. Who’s there?The door.'
  var randNum = Math.random()
  if (randNum > 0.0 && randNum < 0.4) {
    console.log(jokeOne)
  }
  if (randNum > 0.4 && randNum < 0.7) {
    console.log(jokeTwo)
  }
  if (randNum > 0.7 && randNum < 1) {
    console.log(jokeThree)
  }
}

var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end('Welcome to my server')
  } else if (request.url === '/random-joke') {
    randomJokeChooser()
  } else if (request.url === '/cuteness') {
    response.end(
      '<h1>Cute animal</h1>' +
      '<img src="http://static.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals-2/cute-baby-animals-2-2.jpg">'
        )
  } else {
    response.end('404 Error, Page not found at URL: ' + request.url)
  }
})
var port = 8080
server.listen(port)
console.log('Server running at http://localhost:' + port + '/')
