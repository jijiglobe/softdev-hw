def fib(n):
    memo = []
    x = 0
    while x<n+1:
        memo.append(-1)
        x+=1
    return fibInner(n,memo)

def fibInner(n, memo):
#    print memo
    if n<2:
        memo[n] = n
        return memo[n]
    elif memo[n] > -1:
        return memo[n]
    else:
        memo[n] = fibInner(n-1,memo) + fibInner(n-2,memo)
        return memo[n]
for x in range(10):
    print fib(x)
