t = int(input())
for _ in range(t):
    n, c = map(int, input().split())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    INF = 10 ** 18
    ans = INF
    ok = True
    cost = 0
    for i in range(n):
        if a[i] < b[i]:
            ok = False
            break
        cost += a[i] - b[i]
    if ok:
        ans = cost
    sa = sorted(a)
    sb = sorted(b)
    ok = True
    for i in range(n):
        if sa[i] < sb[i]:
            ok = False
            break
    if ok:
        ans = min(ans, c + sum(a) - sum(b))
    print(ans if ans != INF else -1)
