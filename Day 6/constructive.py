t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    s6 = []
    s2 = []
    s1 = []
    s3 = []
    for x in a:
        if x % 6 == 0:
            s6.append(x)
        elif x % 2 == 0:
            s2.append(x)
        elif x % 3 == 0:
            s3.append(x)
        else:
            s1.append(x)
    print(*(s6 + s2 + s1 + s3))
    
