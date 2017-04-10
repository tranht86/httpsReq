function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here*/

  var https = require('https');
  var a = ""

  https.get(requestOptions, function (response) {

    response.setEncoding('utf8');

      response.on('data', function (data) {
        a += data;
      console.log('Chunk received. Length: ', data.length);
      // console.log(data)
      });

      response.on('end', function() {
        console.log('Full stream data a: ', a);
        console.log('Response stream complete.');
      })
  });
}

getAndPrintHTML()