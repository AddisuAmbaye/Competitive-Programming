class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        r = []  

        for i in range(len(matrix)):
            for j in range(len(matrix[i])):
                if matrix[i][j] == 0:
                    r.append(i)
                    r.append(j)
        while (r!=[]):
            w = r.pop(0)
            q = r.pop(0)
            
            for i in range(len(matrix)):
                matrix[i][q] = 0
            
            for j in range(len(matrix[0])):
                matrix[w][j] = 0
