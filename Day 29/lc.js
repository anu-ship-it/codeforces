// Given the root of a binary tree, return the preorder traversal of its nodes' values.

let preorderTraversal = function(root) {
    const result = [];
    
    function dfs(node) {
        if (!node) return;
        result.push(node.val);   
        dfs(node.left);          
        dfs(node.right);        
    }
    
    dfs(root);
    return result;
};
console.log(preorderTraversal([1,null,2,3]))
