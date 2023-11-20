class Solution:
    def findOrder(self, N, P):
        G, indegree, q, ans = defaultdict(list), [0]*N, deque(), []
        for nxt, pre in P:
            G[pre].append(nxt)
            indegree[nxt] += 1
        
        for i in range(N):
            if indegree[i] == 0:
                q.append(i)
        while q:
            cur = q.popleft()
            ans.append(cur)
            for nextCourse in G[cur]:
                indegree[nextCourse] -= 1
                if indegree[nextCourse] == 0: 
                    q.append(nextCourse)
                    
        return ans if len(ans) == N else []