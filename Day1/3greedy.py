def cost(bits, k, n):
    q = bits // k
    if q >= 20:
        return n + 1

    r = bits % k
    return (k - r) * ((1 << q) - 1) + r * ((1 << (q + 1)) - 1)


t = int(input())

for _ in range(t):
    n, k = map(int, input().split())

    lo, hi = 0, n
    ans = 0

    while lo <= hi:
        mid = (lo + hi) // 2

        if cost(mid, k, n) <= n:
            ans = mid
            lo = mid + 1
        else:
            hi = mid - 1

    print(ans)
    