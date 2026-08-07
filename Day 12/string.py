t = int(input())

for _ in range(t):
    n = int(input())
    s = list(input().strip())

    # Maximum
    for i in range(1, n - 1):
        if s[i - 1] == '1' and s[i + 1] == '1':
            s[i] = '1'

    mx = s.count('1')

    # Minimum
    for _ in range(2):
        for i in range(1, n - 1):
            if s[i - 1] == '1' and s[i + 1] == '1':
                s[i] = '0'

    mn = s.count('1')

    print(mn, mx)
    