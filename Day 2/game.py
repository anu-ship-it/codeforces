t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    mn = float("inf")
    ans = 0
    for x in a:
        mn = min(mn, x)
        ans += mn
    print(ans)
    