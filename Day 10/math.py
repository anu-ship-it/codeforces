t = int(input())

for _ in range(t):
    n = int(input())

    ans = []

    for i in range(n):
        ans.append(i + 1)
        ans.append(3 * n - 1 - 2 * i)
        ans.append(3 * n - 2 * i)

    print(*ans)
    