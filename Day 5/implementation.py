t = int(input())
for _ in range(t):
    n, a, b = map(int, input().split())
    ans = n * a
    g = n // 3
    ans = min(ans, g * b + (n - 3 * g) * a)
    g += 1
    ans = min(ans, g * b)
    print(ans)
    