t = int(input())

for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))

    if a[0] == 1 or a[-1] == 1:
        print("Alice")
    else:
        print("Bob")
        