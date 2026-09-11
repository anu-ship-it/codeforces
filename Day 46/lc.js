// Given a string s, return the longest palindrome substring in s.

function longestPalindrome(s) {
  if (s.length < 2) return s;
  let start = 0;
  let maxLen = 1;
  function expandAroundCenter(left, right) {
    while (
      left >= 0 &&
      right < s.length &&
      s[left] === s[right]
    ) {
      left--;
      right++;
    }
    const currentLen = right - left - 1;

    if (currentLen > maxLen) {
      maxLen = currentLen;
      start = left + 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i);
    expandAroundCenter(i, i + 1);
  }
  return s.slice(start, start + maxLen);
}
const s = "babad";
console.log(longestPalindrome(s));
