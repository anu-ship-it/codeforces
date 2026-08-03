t = int(input())
for _ in range(t):
    s = input().strip()
    i = s.index('1')
    s = s[:i] + s[i + 1:]
    j = s.index('0')
    s = s[:j] + s[j + 1:]
    print(s)
    