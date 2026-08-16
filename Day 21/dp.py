import sys
input = sys.stdin.readline

def solve():
    t = int(input())
    for _ in range(t):
        n = int(input())
        a = list(map(int, input().split()))
        
        S = 0
        for i in range(n - 1):
            S += abs(a[i] - a[i + 1])
        
        max_save = 0
        

        max_save = max(max_save, abs(a[0] - a[1]))
        max_save = max(max_save, abs(a[n - 2] - a[n - 1]))
        for k in range(1, n - 1):
            save = abs(a[k - 1] - a[k]) + abs(a[k] - a[k + 1]) - abs(a[k - 1] - a[k + 1])
            if save > max_save:
                max_save = save
        
        print(S - max_save)

if __name__ == "__main__":
    solve()
    