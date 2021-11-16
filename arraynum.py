##given A of length N find smallest positive integer that does not occur in A assuming each element in A is in range [-1M, 1M] and N is in range [1, 100K]

def solution(A):
    c = 1 #smallest positive integer
    A = sorted(list(set(A)))
    N = min(len(A), 100000)

    for b in range(N):
        if A[b] > 0:
            if A[b] != c:
                return c
            c += 1 

    return c 

d = solution(list(range(1, 100001)))
e = solution([1, 3, 6, 4, 1, 2])
f = solution([-1,-3, 1, 2, 3, 4, 5])

print(d, e, f)
