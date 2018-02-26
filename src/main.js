/*
jsCoder
(c) speedyplane 2247
Client Backend, under MIT license.
*/
function encode() {
var decodedURI = document.getElementById("decodeX12").innerHTML;
var encodedURI = encodeURI(decodedURI);
document.getElementByID("outputEncoded").innerHTML = "Encoded URI: " + encodedURI
}
function decode() {
  // tbd
}

/*
Continue
*/
