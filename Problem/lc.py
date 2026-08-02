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

