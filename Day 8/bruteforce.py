t = int(input())
for _ in range(t):
    n = int(input())
    w = list(map(int, input().split()))
    if n % 2 == 1:
        print("NO")
        continue
    mn_odd = min(w[0::2])
    mx_even = max(w[1::2])

    if mn_odd - mx_even >= 2:
        print("YES")
    else:
        print("NO")
