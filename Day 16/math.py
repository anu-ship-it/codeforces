t = int(input())
for _ in range(t):
    n, s, x = map(int, input().split())
    a = list(map(int, input().split()))
    total = sum(a)
    if total > s or (s - total) % x != 0:
        print("NO")
    else:
        print("YES")