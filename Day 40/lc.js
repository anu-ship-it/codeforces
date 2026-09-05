// /Given a collection of candidates numbers(candidates) and a target number(target), find all unique combinations in candidates where the candidate numbers sum to target. Each number in candidates may only be used once in the combination.

let combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];

    function backtrack(start, remaining, path) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] > remaining) break;

            if (i > start && candidates[i] === candidates[i - 1]) continue;

            path.push(candidates[i]);
            backtrack(i + 1, remaining - candidates[i], path);
            path.pop();
        }
    }

    backtrack(0, target, []);
    return result;
};
const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;
console.log(combinationSum2(candidates, target));
