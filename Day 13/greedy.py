import sys

data = list(map(int, sys.stdin.buffer.read().split()))
t = data[0]
idx = 1

out = []

for _ in range(t):
    n = data[idx]
    idx += 1

    a = data[idx:idx + n]
    idx += n

    mx = 0
    ans = 0

    for x in a:
        if x >= mx:
            ans += 1
            mx = x

    out.append(str(ans))

sys.stdout.write("\n".join(out))
