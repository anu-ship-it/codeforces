t = int(input())
for _ in range(t):
    n, c, k = map(int, input().split())
    a = sorted(map(int, input().split()))
    for x in a:
        if x > c:
            break
        use = min(k, c - x)
        k -= use
        c += x + use
    print(c)
        