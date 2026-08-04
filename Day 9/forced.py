t = int(input())

for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))

    m = 100 * n
    dp = [False] * (m + 1)
    dp[0] = True
    cur_max = 0

    for x in a:
        step = 100 // x
        ndp = [False] * (m + 1)

        for s in range(cur_max + 1):
            if not dp[s]:
                continue
            for v in range(0, 101, step):
                if s + v <= m:
                    ndp[s + v] = True

        dp = ndp
        cur_max += 100

    print("Yes" if all(dp) else "No")
    