// In a valid Roman numeral, a smaller value before a larger value means subtraction; otherwise it means addition.

function romanToInt(roman) {
  const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = map[roman[i]];
    const next = map[roman[i + 1]] ?? 0;
    total += current < next ? -current : current;
  }
  return total;
}


// Reverse a string (Input: "hello" Output: "olleh")
function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverse("hello"));

// Find the length of a string without using .length
function getLength(st) {
  let count = 0;
  while (st[count] !== undefined) {
    count++;
  }
  return count;
}
console.log(getLength("Raj"));


// Count the number of vowels in a string.
// eg: "hello" -> 2
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (const char of str){
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Alpha"));

// Count the vowels and consonants in a string

function CountVowelsAndConsonants(s) {
  const vowels = 'aeiou';
  let vowelCount = 0;
  let consonantCount = 0;
  for (const char of s.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      if (vowels.includes(char)) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
  }
  return { vowels: vowelCount, consonants: consonantCount };
}
console.log(CountVowelsAndConsonants("hello"));

// Convert lowercase into uppercase and uppercase to lowercase without using .toupper and .tolower 

function swapCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(code + 32);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(code - 32);
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(swapCase("Hello World 123!"));