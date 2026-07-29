t = int(input())
for _ in range(t):
    n = int(input())
    r = n % 12
    if r != 10:
        print(r, n - r)
    elif n == 10:
        print(-1)
    else:
        print(22, n - 22)
        