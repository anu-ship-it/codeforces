let getRow = function(rowIndex) {
    const row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i = 1; i <= rowIndex; i++) {
        for(let j = 1; j > 0; j--) {
            row[j] += row[j - 1];
        }
    }
    return row;
};
console.log(getRow(3));
