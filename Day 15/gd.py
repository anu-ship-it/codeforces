t = int(input())

for _ in range(t):
    n, w = map(int, input().split())
    print(n - n // w)