import sys
input = sys.stdin.readline

INF = 10**9
target2026 = '2026'
chars = '0256'
char_id = {c: i for i, c in enumerate(chars)}

def min_to_2026(s):
    n = len(s)
    best = INF
    for i in range(n - 3):
        cost = 0
        for j in range(4):
            if s[i + j] != target2026[j]:
                cost += 1
        best = min(best, cost)
    return best

def min_to_no_2025(s):
    n = len(s)
    # dp[pos][mask] = min changes for first pos chars, last 3 chars encoded in mask
    dp = [[INF] * 64 for _ in range(n + 1)]
    dp[0][0] = 0          # empty prefix

    for pos in range(n):
        for mask in range(64):
            if dp[pos][mask] == INF:
                continue
            for nid, c in enumerate(chars):
                cost = 0 if s[pos] == c else 1
                # build the new 4-char window
                # extract previous 3 chars from mask
                prev = []
                m = mask
                for _ in range(min(3, pos)):
                    prev.append(m & 3)
                    m >>= 2
                prev = prev[::-1]
                window = prev + [nid]
                if len(window) == 4:
                    wstr = ''.join(chars[x] for x in window)
                    if wstr == '2025':
                        continue          # forbidden
                # new mask = last 3 of window
                new_mask = 0
                for x in window[-3:]:
                    new_mask = (new_mask << 2) | x
                dp[pos + 1][new_mask] = min(dp[pos + 1][new_mask],
                                            dp[pos][mask] + cost)

    return min(dp[n])

t = int(input())
for _ in range(t):
    n = int(input())
    s = input().strip()
    ans = min(min_to_2026(s), min_to_no_2025(s))
    print(ans)