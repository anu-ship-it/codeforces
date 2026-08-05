t = int(input())

for _ in range(t):
    n = int(input())
    a = list(map(int, input().split()))

    steps = sorted(100 // x for x in a)

    reach = 0
    ok = True

    for step in steps:
        if step > reach + 1:
            ok = False
            break
        reach += 100

    print("Yes" if ok else "No")
    