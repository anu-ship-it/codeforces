t = int(input())
for _ in range(t):
    n = int(input())
    s = input().strip()
    
    max_blocks = 0
    # Try all possible cyclic rotations
    for i in range(n):
        rotated = s[i:] + s[:i]
        
        # Count the number of blocks in the rotated string
        blocks = 1
        for j in range(1, n):
            if rotated[j] != rotated[j - 1]:
                blocks += 1
        
        max_blocks = max(max_blocks, blocks)
    
    print(max_blocks)
    