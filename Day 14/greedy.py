t = int(input())

for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))

    ans = n

    for i in range(n):
        for j in range(i + 1, n):
            if a[i] > a[j]:
                ans = min(ans, 2)

    if ans == n:
        print(n)
    else:
        print(1)
        