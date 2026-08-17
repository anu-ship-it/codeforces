import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))
    
    total = 0
    for i in range(n - 1):
        total += abs(a[i] - a[i + 1])
    
    max_save = 0
    # remove first
    max_save = max(max_save, abs(a[0] - a[1]))
    # remove last
    max_save = max(max_save, abs(a[n - 2] - a[n - 1]))
    # remove internal
    for i in range(1, n - 1):
        save = abs(a[i - 1] - a[i]) + abs(a[i] - a[i + 1]) - abs(a[i - 1] - a[i + 1])
        if save > max_save:
            max_save = save
    
    print(total - max_save)
    