var t = parseInt(readline());

for (var test = 0; test < t; test++) {
  var parts = readline().split(' ').map(Number);
  var n = parts[0], h = parts[1], l = parts[2];
  var a = readline().split(' ').map(Number);
  
  var onlyRow = 0;
  var onlyCol = 0;
  var both = 0;
  
  for (var i = 0; i < a.length; i++) {
    var x = a[i];
    if (x <= h && x <= l) {
      both++;
    } else if (x <= h) {
      onlyRow++;
    } else if (x <= l) {
      onlyCol++;
    }
  }
  
  var rowCapable = onlyRow + both;
  var colCapable = onlyCol + both;
  var usable = onlyRow + onlyCol + both;
  
  var ans = Math.min(rowCapable, colCapable, Math.floor(usable / 2));
  print(ans);
}
