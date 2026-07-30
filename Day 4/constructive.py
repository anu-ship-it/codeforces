t = int(input())
for _ in range(t):
    n = int(input())
    ans = []
    x = 1
    while len(ans) < n:
        if x % 3 != 0:
            ans.append(x)
        x += 1
    print(*ans)
    