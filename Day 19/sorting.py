t = int(input())
for _ in range(t):
    a, b, c = map(int, input().split())
    rounds = 0
    while len(set([a, b, c])) == 3:  
        vals = [a, b, c]
        mx = max(vals)
        mn = min(vals)
        if a == mx:
            a -= 1
        elif b == mx:
            b -= 1
        else:
            c -= 1
        if a == mn:
            a += 1
        elif b == mn:
            b += 1
        else:
            c += 1
        rounds += 1
    print(rounds)
    