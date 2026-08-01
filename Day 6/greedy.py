t = int(input())
for _ in range(t):
    n = int(input())
    w = list(map(int, input().split()))

    c0 = w.count(0)
    c1 = w.count(1)
    c2 = w.count(2)

    best = 0
    for x in range(min(c1, c2) + 1):
        cur = x + (c1 - x) // 3 + (c2 - x) // 3
        best = max(best, cur)

    print(c0 + best)
        