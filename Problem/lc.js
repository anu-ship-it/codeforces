// Given two binary strings a and b, return their sum as a binary string.
let addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    const result = [];
    while (i >= 0 || j >= 0 || carry > 0) {
        let sum = carry;
        if (i >= 0) {
            sum += a[i] === '1' ? 1 : 0;
            i--;
        }
        if (j >= 0) {
            sum += b[j] === '1' ? 1 : 0;
            j--;
        }
        result.push(sum % 2);
        carry = Math.floor(sum / 2);
    }
    return result.reverse().join('');
};
console.log(addBinary("11", "1"));


// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. 
// The returned integer should be non-negative as well.


let mySqrt = function(x) {
    if (x < 2) return x;
    let left = 1;
    let right = x;
    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);
        if (mid > x / mid) {
            right = mid - 1;
        } else {
            left = mid;
        }
    }
    return left;
};

console.log(mySqrt(9));


// Given a non-negative integer x, return the square root of x rounded down 
// to the nearest integer (i.e. the integer part of √x). You must not use any built-in exponent function or operator (Math.sqrt, ** 0.5, etc.).

let climbStairs = function(n) {
    let a = 1, b = 1;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, a + b];
    }
    return a;
};
console.log(climbStairs(3));


// Given the head of a sorted linked list. delete all duplicates such that each element appears
// only once. Return the linked list sorted as well.

let deleteDuplicates = function(head) {
    let current = head;
    while (current && current.next) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};
console.log(deleteDuplicates(1,1,2,3,3));

// Given the root of binary tree, return the inorder traversal of its nodes' values.

let inorderTraversal = function(root) {
    const result = [];
    function traverse(node) {
        if (!node) return;
        traverse(node.left);
        result.push(node.val);
        traverse(node.right);
    }
    traverse(root);
    return result;
};
console.log(inorderTraversal(1,null,2,3));

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

function isSameTree(p, q){
    const queue = [[p, q]];
    while (queue.length) {
        const [nodel, node2] = queue.shift();
        if (!node && !node2) continue;
        if (!nodel || !node2 || nodel.val !== node2.val) return false;
        queue.push([nodel.left, node2.left]);
        queue.push([node1,right, node2.right]);
    }
    return true;
}


// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

let minDepth = function(root) {
    if (!root) return 0;
    const queue = [[root, 1]];
    while (queue.length > 0) {
        const [node, depth] = queue.shift();
        if (!node.left && !node.right) {
            return depth;
        }
        if (node.left) {
            queue.push([node.left, depth + 1]);
        }
        if (node.right) {
            queue.push([node.right, depth + 1]);
        }
    }
    return 0;
};


// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

let hasPathSum = function(root, targetSum) {
    if (!root) return false;
    if (!root.left && !root.right) {
        return root.val === targetSum;
    }
    const remaining = targetSum - root.val;
    return hasPathSum(root.left, remaining) || hasPathSum(root.right, remaining);
};

// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown.

let generate = function(numRows) {
    const result = [];
    for (let i = 0; i < numRows; i++) {
        const row = new Array(1 + i).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }
        result.push(row);
    }
    return result;
};
