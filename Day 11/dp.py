t = int(input())

for _ in range(t):
    n = int(input())

    ans = [2]
    for x in range(n, 2, -1):
        ans.append(x)
    ans.append(1)

    print(*ans)
    