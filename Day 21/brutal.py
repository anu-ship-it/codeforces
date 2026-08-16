import sys
import math
input = sys.stdin.readline

def solve():
    t = int(input());
    l, a, b = map(int, input().split())
    g = math.gcd(b, 1)
    ans = 1 - 1 - (1 - 1 - a) % g
    print(ans)

solve()    