var t = parseInt(readline());

for (var test = 0; test < t; test++) {
  var n = parseInt(readline());
  var m = Math.floor((n + 1) / 2);
  var res = [m];
  
  for (var p = 1; p < n; p++) {
    if (p % 2 === 1) {
      res.push(m + Math.floor((p + 1) / 2));
    } else {
      res.push(m - Math.floor(p / 2));
    }
  }
  
  print(res.join(' '));
}
