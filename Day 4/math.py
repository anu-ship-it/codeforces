t = int(input())
for _ in range(t):
    n, x, y, z = map(int, input().split())
    no_ai = (n + x + y - 1) // (x + y)
    if n <= x * z:
        ai = (n + x - 1) // x
    else:
        rem = n - x * z
        ai = z + (rem + x + 10 * y - 1) // (x + 10 * y)
    print(min(no_ai, ai))
