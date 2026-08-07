from collections import Counter
t = int(input())
for _ in range(t):
    n = int(input())
    cnt = Counter()
    for _ in range(n):
        row = list(map(int, input().split()))
        cnt.update(row)
    limit = n * (n - 1)
    ok = True
    for v in cnt.values():
        if v > limit:
            ok = False
            break
    print("YES" if ok else "NO")
    