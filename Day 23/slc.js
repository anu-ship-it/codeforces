var lengthOfLongestSubstring = function(s) {
    const indexArr = Array(128).fill(null)
    let res = 0
    let left = 0
    let right = 0

    while(right < s.length){
        const indexCode = s.charCodeAt(right)
        const index = indexArr[indexCode]
        if(index !== null && index >= left){
            left = index + 1
        }
        indexArr[indexCode] = right

        res = Math.max(res, right - left + 1)
        right++
    }
    return res
};