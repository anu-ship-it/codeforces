t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    ans = 0
    if a[-1] > 0:
        ans += 1
    for i in range(n - 2, -1, -1):
        if a[i] <= 0 and a[i + 1] > 0:
            a[i] += a[i + 1]
        if a[i] > 0:
            ans += 1
    print(ans)
                     