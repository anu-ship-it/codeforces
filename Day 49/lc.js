// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

let convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;
    const rows = new Array(Math.min(numRows, s.length)).fill("");
    let curRows = 0;
    let goingDown = false;
    for (let c of s) {
        rows[curRow] += c;
        if (curRows === 0 || curRows === numRows - 1)
        goingDown = !goingDown;
        curRows += goingDown ? 1 : -1;
    }
    return rows.join("");
};
console.log(convert("A",1));
