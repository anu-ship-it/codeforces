import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    n, k = map(int, input().split())
    s = input().strip()

    m = 2 * n

    red_score = 0
    blue_score = 0

    for i in range(m):
        if s[i] == '0':
            continue

        # Potato stays unless the next person is empty.
        if s[(i + 1) % m] == '0':
            pos = (i + 1) % m
        else:
            pos = i

        # pos is 0-based.
        # Even index -> odd-numbered leprechaun -> Red
        # Odd index  -> even-numbered leprechaun -> Blue
        if pos % 2 == 0:
            blue_score += 1
        else:
            red_score += 1

    print(red_score, blue_score)