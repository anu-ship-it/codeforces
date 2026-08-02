MOD = 676767677
t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    ans = 0
    for x in a:
        if x > 1:
            ans += x
    if a[-1] == 1:
        ans += 1
    print(ans % MOD)
