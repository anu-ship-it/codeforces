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
