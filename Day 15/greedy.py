t = int(input())
for _ in range(t):
    x = int(input())
    ans = 0
    for y in range(max(1, x), x + 100):
        if y - sum(map(int, str(y))) == x:
            ans += 1
    print(ans)        

    