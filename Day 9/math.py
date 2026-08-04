t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    carry = 0
    prev = 0
    ok = True
    for i in range(n - 1):
        cur = a[i] + carry
        need = prev + 1
        if cur < need:
            ok = False
            break
        carry = cur - need
        prev = need
    if ok:
        if a[-1] + carry > prev:
            print("YES")
        else:
            print("NO")
    else:
        print("NO")
