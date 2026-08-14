import sys
input = sys.stdin.readline

t = int(input())
for _ in range(t):
    a, b, c = map(int, input().split())
    x = sorted([a, b, c])
    if x[2] > x[0] + x[1]:
        x[2] = x[0] + x[1]
    print(x[2] - x[0])
