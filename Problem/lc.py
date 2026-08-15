# Write a function to find the longest common prefix string amongst an array of strings.
# If there is no common prefix, return an empty string "".

from typing import List, Optional

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
def isValid(self, s: str) -> bool:
        stack = []
        mp = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        for ch in s:
            if ch in "([{":
                stack.append(ch)
            else:
                if not stack or stack[-1] != mp[ch]:
                    return False
                stack.pop()
        return len(stack) == 0

print(isValid(None, "()[]{}"))

# You are given the heads of two sorted linked lists list1 and list2.
# Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        current = dummy

        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next

            current = current.next

        # Attach the remaining nodes
        if list1:
            current.next = list1
        else:
            current.next = list2

        return dummy.next

print(mergeTwoLists(None, ListNode(1, ListNode(2, ListNode(4))), ListNode(1, ListNode(3, ListNode(4)))))


# Given an integer array nums sorted in non-decreasing order, 
# remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.
def removeDuplicates(nums): 
    if len(nums) == 0:
        return 0
    i = 1
    for j in range(1, len(nums)):    
        if nums[j] != nums[j - 1]:
            nums[i] = nums[j]
            i += 1
    return i        

nums = [0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4]    
k = removeDuplicates(nums)
print(k)
print(nums[:k])


# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
# The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

def removeElement(nums, val):
    k = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k
nums = [3, 2, 2, 3]    
k = removeElement(nums, 3)
print(k)
print(nums[:k])


# Given two strings needle and haystack, return the index of the first occurence of needle in haystack, or -1 if needle is not part of haystack.

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return haystack.find(needle)


# Given a sorted array of distinct integers and a target value, return
# the index if the target is found. if not, return the index where it 
# would be id it inserted in order. 

def searchInsert(self, nums, target):
    left = 0
    right = len(nums) - 1

    while left <= right:
        mid = (left + right) // 2

        if nums[mid] == target:
            return mid

        elif nums[mid] < target:
            left = mid + 1

        else:
            right = mid - 1

    return left
nums = [3, 2, 2, 3]    
print(nums[:k])


# Given a string s consisting of words and spaces, return the length of the last word in the string.

def lengthOfLastWord(self, s: str) -> int:
    i = len(s) - 1
    while s[i] == '':
        i -= 1
    count = 0
    while i >= 0 and s[i] != '':
        count += 1
        i -= 1
    return count


# You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
# The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

class Solution:
    def plusOne(self, digits):
        for i in range(len(digits) -1, -1, -1):
            if digits[i] < 9:
                digits[i] += 1
                return digits
            digits[i] = 0    
        return [i] + digits


# Given the root of a binary tree, check wheather it is mirror of itself(i.e, symmetric around its center.)

class Solution:
    def isSymmetric(self, root):
        def isMirror(t1, t2):
            if t1 is None and t2 is None:
                return True
            if t1 is None or t2 is None:
                return False
            return (t1.val == t2.val and 
                    isMirror(t1.left, t2.right) and 
                    isMirror(t1.right, t2.left))
        
        return isMirror(root.left, root.right) if root else True


# Given the root of a binary tree, return its maximum depth.
# A binary tree's maximum depth is the number of nodes along the logest path from the root node down to the farthest leaf node.

from collections import deque

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        
        queue = deque([root])
        depth = 0
        
        while queue:
            depth += 1
            for _ in range(len(queue)):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        
        return depth


# Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

class TreeNode:
    def __init__(self):
        self.val = self.val
        self.left = left
        self.right = right

class Solution:
    def sortedArrayToBST(self, nums):
        def build(left, right):
            if left > right:
                return None
            mid = (left + right) // 2
            root = TreeNode(nums[mid])
            root.left = build(left, mid - 1)
            root.right = build(mid + 1, right)
            return root

        return build(0, len(nums) -1)


# Given a binary tree, determine if it is
# Input = [3,9,20,null,null,15,7]

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isBalanced(self, root):
        def height(node):
            if not node:
                return 0                     # height of empty tree is 0
            
            left = height(node.left)
            if left == -1:                   # left subtree already unbalanced
                return -1
            
            right = height(node.right)
            if right == -1:                  # right subtree already unbalanced
                return -1
            
            if abs(left - right) > 1:        # current node unbalanced
                return -1
            
            return 1 + max(left, right)      # return real height
        
        return height(root) != -1