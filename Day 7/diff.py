t = int(input())
for _ in range(t):
    x, y = map(int, input().split())

    if y // x == 2:
        print("NO")
    else:
        print("YES")
        