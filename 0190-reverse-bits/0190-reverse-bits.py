class Solution:
    def reverseBits(self, n: int) -> int:
        output=0
        for i in range(32):
            bits=n & 1
            output= output | bits << (31-i)
            n=n >> 1
        return output