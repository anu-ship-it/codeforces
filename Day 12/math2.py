import math
t = int(input())
for _ in range(t):
    n = int(input())
    x = n
    ans = 1
    d = 2
    while d * d <= x:
        if x % d == 0:
            ans *= d
            while x % d == 0:
                x //= d
        d += 1 if d == 2 else 2        

    if x > 1:    
        ans *= x
    print(ans)
        