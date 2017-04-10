function getAndPrintHTML (options) {

  var https = require('https')
  var a = ""

  https.get(options, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
      a += data;
      console.log('Chunk received. Length: ', data.length);
    });

    response.on('end', function(){
      console.log('Full stream data at a: ', a);
      console.log('Response stream complete.')
    })

  })
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);