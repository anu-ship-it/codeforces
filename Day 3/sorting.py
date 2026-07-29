t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    if n == 2:
        print(max(a), min(a))
        continue
    a.sort(reverse=True)
    ok = True
    for i in range(n - 1):
        if a[i] <= a[i + 1]:
            ok = False
            break
    if ok:
        for i in range(n - 2):
            if a[i] % a[i + 1] != a[i + 2]:
                ok = False
                break
    if ok:
        print(a[0], a[1])
    else:
        print(-1)
        