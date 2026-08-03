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
