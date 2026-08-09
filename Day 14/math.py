t = int(input())
for _ in range(t):
    x, y = map(int, input().split())
    v = x - 2 * y
    if v < 0 or v % 3 != 0:
        print("NO")
        continue
    if y < 0 and v < -6 * y:
        print("NO")
    else:
        print("YES")
