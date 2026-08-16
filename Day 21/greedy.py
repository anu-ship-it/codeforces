import sys
input = sys.stdin.readline

def solve():
    t = int(input())
    for _ in range(t):
        n = int(input())
        a = input().split()

        s = ""
        for x in a:
            if s + x <= x + s:
                s = s + x
            else:
                s = x + s

        print(s)

solve()
                    