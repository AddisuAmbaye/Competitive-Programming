            
# #Memoization (Top-Down)
# #Time Complexity: O(m*n)
# #Space Complexity: O(m+n) + O(m*n)
# class Solution:
#     def isMatch(self, s: str, p: str) -> bool:
#         def isAllStars(ind):
#             for i in range(ind+1):
#                 if p[i]!='*':
#                     return False
#             return True
#         def solve(i,j):
#             if i<0 and j<0:
#                 return True
#             if i>=0 and j<0:
#                 return False
#             if i<0 and j>=0:
#                 return isAllStars(j)
#             if dp[i][j]!=-1:
#                 return dp[i][j]
#             if s[i]==p[j] or p[j]=='?':
#                 dp[i][j]=solve(i-1,j-1)
#                 return dp[i][j]
#             elif p[j]=='*':
#                 dp[i][j]=solve(i,j-1) or solve(i-1,j)
#                 return dp[i][j]
#             else:
#                 dp[i][j]=False
#                 return dp[i][j]
#         m,n=len(s),len(p)
#         dp=[[-1 for j in range(n)] for i in range(m)]
#         return solve(m-1,n-1)

#Tabulation (Bottom-Up)
#Time Complexity: O(m*n)
#Space Complexity: O(m*n)
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m,n=len(s),len(p)
        dp=[[False for i in range(m+1)] for j in range(n+1)]
        dp[0][0]=True
        for i in range(1,n + 1):
            if(p[i - 1] == '*'):
                dp[i][0] = True
            else:
                break
        for i in range(1,n+1):
            for j in range(1,m+1):
                if s[j-1]==p[i-1] or p[i-1]=='?':
                    dp[i][j]=dp[i-1][j-1]
                elif p[i-1]=='*':
                    dp[i][j]=dp[i-1][j] or dp[i][j-1] 
                else:
                    dp[i][j]=False
        return dp[n][m]