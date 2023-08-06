class Solution:
    def reverse(self, x: int) -> int:

        mxStr =  '2147483647'

        ansLst = reversed(str(abs(x)))
      
        ansStr = ''.join(ansLst).rjust(10,'0')

        if ansStr > mxStr: return 0
       
        return int(ansStr)*(1 - 2*(x < 0))