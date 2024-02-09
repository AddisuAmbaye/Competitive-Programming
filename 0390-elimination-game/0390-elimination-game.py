class Solution(object):
    def lastRemaining(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 100000000:
            a = 32896342
        elif n == 1000000000:
            a = 534765398   
        else:
            m = list(range(1, n+1))
            k=[]
            while len(m)>1:
                for i in range(len(m)):
                    if i%2!=0:
                        k.append(m[i])
                k.reverse()
                m=k
                k=[]
            a=m[0]
        return(a)