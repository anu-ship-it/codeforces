MOD = 998244353
def ways(chain):
    if not chain:
        return 1
    end0 = 1 if chain[0] in '0?' else 0
    end1 = 1 if chain[0] in '1?' else 0
    for c in chain[1:]:
        new0 = end1 if c in '0?' else 0
        new1 = end0 if c in '1?' else 0
        end0, end1 = new0 % MOD, new1 % MOD
    return (end0 + end1) % MOD
t = int(input())
for _ in range(t):
    n = int(input())
    s = input().strip()
    odd = s[0::2]
    even = s[1::2]
    print(ways(odd) * ways(even) % MOD)
        