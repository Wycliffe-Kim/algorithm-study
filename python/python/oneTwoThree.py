def oneTwoThree(n):
    dp = [0, 1, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0]

    for i in range(4, n + 1):
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i-3]

    return dp[n]
