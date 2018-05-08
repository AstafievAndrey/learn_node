var str = "How can mirrors be real if our eyes aren't real";


String.prototype.toJadenCaseV1 = function () {
    return this.toString().replace( /^[a-z]|\s[a-z]/gi, (x) => x.toUpperCase());
};

String.prototype.toJadenCaseV2 = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}


console.log(str.toJadenCaseV1());
console.log(str.toJadenCaseV2());