t = int(input())
for _ in range(t):
    n, m, d = map(int, input().split())
    max_height = d // m + 1
    towers = (n + max_height - 1) // max_height
    print(towers)
    