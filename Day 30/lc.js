let postorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let curr = root;
    let lastVisited = null;

    while (curr || stack.length) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;               
        } else {
            const peek = stack[stack.length - 1];
            if (peek.right && peek.right !== lastVisited) {
                curr = peek.right;
            } else {
                result.push(peek.val);
                lastVisited = stack.pop();
            }
        }
    }

    return result;
};
console.log(postorderTraversal([1,null,2,3]))