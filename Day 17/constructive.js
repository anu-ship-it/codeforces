var t = parseInt(readline());

for (var test = 0; test < t; test++) {
  var n = parseInt(readline());
  var a = readline().split(' ').map(Number);
  
  var ok = true;
  for (var i = 0; i < n - 1; i++) {
    if ((a[i] % 2) === (a[i + 1] % 2)) {
      ok = false;
      break;
    }
  }
  
  print(ok ? "YES" : "NO");
}
