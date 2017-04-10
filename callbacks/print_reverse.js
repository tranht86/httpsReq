var getHTML = require('./http-functions.js')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  /* Write your code here! */
  return html.split("").reverse().join("");
  console.log(html);

}

getHTML(requestOptions, printReverse);