t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    d = max(a) - min(a)
    print((d + 1) // 2)
    