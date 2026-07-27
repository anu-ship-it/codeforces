var t = parseInt(readline());

for (var tc = 0; tc < t; tc++) {
    var k = parseInt(readline());
    var c = readline().split(" ").map(Number);

    var mx = 0;
    var cnt = 0;

    for (var i = 0; i < k; i++) {
        if (c[i] > mx) mx = c[i];
        if (c[i] >= 2) cnt++;
    }

    print(mx >= 3 || cnt >= 2 ? "YES" : "NO");
}
