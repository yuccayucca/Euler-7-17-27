// helper function used in tasks 7 and 27
function isPrime(n) {
  var divisor = 3,
      limit = Math.sqrt(n);

  //filter invalid input
  if (n <= 1)
    return false;
  //check simpler cases
  if (n == 2 || n == 3)
     return true;
  if (n % 2 == 0)
     return false;

  while (divisor <= limit) {
    if (n % divisor == 0)
      return false;
    else
      divisor += 2;
  }
  return true;
}

// task 7 solution
function nthPrime(n) {
	var primeCount = 0,
    primeNo = 1;

  while (primeCount < n) {
  	primeNo++;
    if (isPrime(primeNo)) {
      primeCount++;
    }
  }
  return primeNo;
}

//list numbers 1-19, exclude index 0
var oneteens = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['twenty', 'thrity', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var hundred = 'hundred',
thousand = 'thousand',
and = 'and';


function under100(n) {
  if (n < 20) {
    return oneteens[n].length;
  } else {
    var index = n / 10 - 2 | 0;
    return tens[index].length + oneteens[n % 10].length;
  }
}

function getNumLength(n) {
  //calculate length for numbers 1-99
  if (n < 100)
    return under100(n);

  var count = 0;
  var h = Math.floor(n / 100) % 10;
  var t = Math.floor(n / 1000);
  var s = n % 100;

  //handle hundreds
  if (n > 999)
    count += thousand.length + under100(t);
  if (h !== 0)
    count +=  hundred.length + oneteens[h].length;
  if (s !== 0)
    count += and.length + under100(s);
  return count;
}

function countNumLength(n) {
  var finalCount = 0;
  for (var i = 1; i <= n; i++) {
    finalCount += getNumLength(i);
  }
  return finalCount;
}


// task 27 solution
function findMaxValues(limit) {
  var next = 0,
    maxA = 0,
    maxB = 0;

  // prevent negatives
  limit = Math.abs(limit);

  for (var a = -limit; a <= limit; a++) {
    for (var b = -limit; b <= limit; b++) {
      var n = 0;
      while (isPrime(n*n + a*n + b)) {
        n++;
      }

      if (next < n) {
        next = n;
        maxA = a;
        maxB = b;
      }
    }
  }
  return 'a: ' + maxA + ' b: ' + maxB;
}

// output to HTML
var out = "";

var t0 = performance.now();

out += "7. 10001 prime number: " + nthPrime(10001) + "<br>";

var t1 = performance.now();
out += (t1 - t0).toFixed(2) + " ms." + "<br>";

var t2 = performance.now();

out += "17. Length of number words 1-1000: " + countNumLength(1000) + "<br>";

var t3 = performance.now();
out += (t3 - t2).toFixed(2) + " ms." + "<br>";

var t4 = performance.now();

out += "27. Max values: " + findMaxValues(1000) + "<br>";

var t5 = performance.now();
out += (t5 - t4).toFixed(2) + " ms." + "<br>";

document.getElementById("output").innerHTML = out;
