t = int(input())

for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))

    for i in range(n - 2, -1, -1):
        if a[i + 1] >= 0:
            a[i] += a[i + 1]

    ans = 0
    for x in a:
        if x > 0:
            ans += 1

    print(ans)
