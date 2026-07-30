t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    ans = n
    for p in set(a):
        left = 0
        right = 0
        for x in a:
            if x < p:
                left += 1
            elif x > p:
                right += 1
        ans = min(ans, max(left, right))
    print(ans)
    