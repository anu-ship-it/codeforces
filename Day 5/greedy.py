t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    b = list(map(int, input().split()))
    total = 0
    best = 0
    for x, y in zip(a, b):
        total += max(x, y)
        best = max(best, min(x, y))
    print(total + best)
    