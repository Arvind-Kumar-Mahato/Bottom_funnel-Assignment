/*
print a number of series 100 to 100000 only the number which is palindrome number in ascending order 
*/


function isPalindrome(n) {
  var rev = 0;
  for (var i = n; Math.trunc(i) > 0; i /= 10) {
    rev = rev * 10 + (Math.trunc(i) % 10);
  }
  return n == rev;
}

function countPal(min, max) {
  for (var i = min; i <= max; i++) {
    if (isPalindrome(i))
     console.log(i + " ");
  }
}
countPal(100, 100000);