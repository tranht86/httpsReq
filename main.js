function getAndPrintHTMLChunks() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-exmaples/step2.html'
  };

  var https = require('https');

  https.get(requestOptions, function (response) {

    //set encoding to UTF-8
    response.setEncoding('utf8');

    //the callback is invoked when 'data' chunk is received
    response.on('data', function (data) {
      console.log('Chunk received. Length: ', data.length);

    });

    // the callback is invoked when all of the data has been received
    // the 'end' of the stream
    response.on('end', function () {
      console.log('Response stream complete.');
    });
  })
}


getAndPrintHTMLChunks()
