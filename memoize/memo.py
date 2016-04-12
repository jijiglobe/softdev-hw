def memoize(f):
    memo = {}
    def inner(x):
        if x not in memo:
            memo[x] = f(x);
        return memo[x]
    return inner
