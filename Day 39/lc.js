// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

let combinationSum = function(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b); 

  function backtrack(start, remaining, path) {
    if (remaining === 0) {
      result.push([...path]); 
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const num = candidates[i];
      if (num > remaining) break;

      path.push(num);
      backtrack(i, remaining - num, path);
      path.pop(); 
    }
  }

  backtrack(0, target, []);
  return result;
};
