t = int(input())
for _ in range(t):
    n = int(input())
    s = input()
    ans = 0
    i = 0
    while i < n:
        if s[i] == '#':
            j = i
            while j < n and s[j] == '#':
                j += 1
            length = j - i
            ans = max(ans, (length + 1) // 2)
            i = j
        else:
            i += 1
    print(ans)
