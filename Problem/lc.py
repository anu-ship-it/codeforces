# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string "".

from typing import List

def longestCommonPrefix(self, strs: List[str]) -> str:
    ans = ""

    for i in range(len(strs[0])):
        ch = strs[0][i]

        for s in strs[1:]:
            if i == len(s) or s[i] != ch:
                return ans
            
        ans += ch
    return ans
print(longestCommonPrefix(None, ["flower", "flow", "flight"]))

# Given an integer x, return true if x is a palindrome, and false otherwise.

def isPalindrome(self, x: int) -> bool:
    if x < 0 or (x % 10 == 0 and x != 0):
        return False
    reversed_half = 0
    while x > reversed_half:
        reversed_half = reversed_half * 10 + x % 10
        x //= 10
    return x == reversed_half or x == reversed_half // 10
print(isPalindrome(None, 121))      


# Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
# Given a roman numeral, convert it to an integer.

def romanToInt(self, s: str) -> int:
    roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    ans = 0
    for i in range(len(s)):
        if i < len(s) - 1 and roman[s[i]] < roman[s[i + 1]]:
            ans -= roman[s[i]]
        else:
            ans += roman[s[i]]
    return ans
print(romanToInt(None, "MCMXCIV"))
            

# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
