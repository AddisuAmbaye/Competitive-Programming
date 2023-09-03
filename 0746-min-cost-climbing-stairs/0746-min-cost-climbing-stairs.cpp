class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n = cost.size();
        vector<int> memo(n, -1);
        return min(dp(0, cost, memo), dp(1, cost, memo));
    }

private:
    int dp(int idx, vector<int>& cost, vector<int>& memo) {
        if (idx >= cost.size()) return 0;
        if (memo[idx] != -1) return memo[idx];
        return memo[idx] = cost[idx] + min(dp(idx + 1, cost, memo), dp(idx + 2, cost, memo));
    }
};