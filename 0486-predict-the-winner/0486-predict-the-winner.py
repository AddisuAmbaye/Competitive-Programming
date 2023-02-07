class Solution:
    def PredictTheWinner(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        n = len(nums)
        # initialize a n*n*2 matrix, dp[i][k][0] means 
        # for beginning array nums[i:k+1], player1's score, 
        # and dp[i][k][1] means player2's.
        dp = [[[0 for state in range(2)] for i in range(n)] for j in range(n)]
        for i in range(n):
            dp[i][i][0] = nums[i]
        for i in range(1, n):
            #internal from 1 to n-1
            for k in range(n-i):
                # two strategies of player1
                p1_1 = nums[k]+dp[k+1][k+i][1]
                p1_2 = nums[k+i]+dp[k][k+i-1][1]
                if p1_1 > p1_2:
                    dp[k][k+i][0] = p1_1
                    dp[k][k+i][1] = dp[k+1][k+i][0]
                else:
                    dp[k][k+i][0] = p1_2
                    dp[k][k+i][1] = dp[k][k+i-1][0]
        # player1 win the game if the got the same scores.
        return dp[0][n-1][0] >= dp[0][n-1][1]