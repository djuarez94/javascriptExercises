$( document ).ready(function() {
    /*-------------------------------------
    | Reverse A  String
    -------------------------------------*/
    var randomString = 'Reverse this string. Let us see if you can do it. Can you? I bet you can\'t!';
    var string2reverse = $('.string').text(randomString);

    var changeButton = $('.reverseButton');
    var result = document.querySelector(".reversedResult");


function reversedString () {
    var splitString = randomString.split(" ");
    var reverseString = splitString.reverse();
    var joinString = reverseString.join(" ");

    result.innerHTML = joinString;
};

changeButton.click(reversedString);

/*-------------------------------------
| Factorialize a Number
-------------------------------------*/
var randomNumber = 20;
var showNumber = $('.number').text(randomNumber);

var changeButton2 = $('.factorializeButton');
var result2 = document.querySelector('.factorializedResult');

function factorialize() {
  var beginningNumber = 1;
  for (var count = randomNumber; count > 1; count--) {
    beginningNumber *= count;
  }
  return result2.innerHTML = beginningNumber;

}

changeButton2.click(factorialize);

});